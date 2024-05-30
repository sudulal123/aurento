import { HomeProps } from "@types";
import { fetchVehicles } from "@utils";
import { fuels, yearsOfProduction } from "@lists";
import { Filter, Hero, SearchBar, ShowMore, VehicleCard } from "@components";

export default async function Home({ searchParams }: HomeProps) {
  const allVehicles = await fetchVehicles({
    manufacturer: searchParams.manufacturer || "",
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 20,
    model: searchParams.model || "",
    year: searchParams.year || 2024,
    title: "",
    options: []
  });

  const isDataEmpty = !Array.isArray(allVehicles) || allVehicles.length < 1 || !allVehicles;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Browse your wheels</h1>
          <p>Discover vehicles tailored to your preferences</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <Filter title='fuel' options={fuels} />
            <Filter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__vehicles-wrapper'>
              {allVehicles?.map((vehicle) => (
                <VehicleCard vehicle={vehicle} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 12) > allVehicles.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oh no! something is wrong</h2>
            <p>{allVehicles?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
