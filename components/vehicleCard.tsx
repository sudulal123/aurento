"use client";

import Button from "./button";
import Image from "next/image";
import { useState } from "react";
import { VehicleProps } from "@types";
import VehicleDetails from "./vehicleDetails";
import { calculateVehicleRent, generateVehicleImageUrl } from "@utils";

interface VehicleCardProps {
  vehicle: VehicleProps;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = vehicle;

  const [isOpen, setIsOpen] = useState(false);

  const vehicleRent = calculateVehicleRent(city_mpg, year);

  return (
    <div className="vehicle-card group">
      <div className="vehicle-card__content">
        <h2 className="vehicle-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {vehicleRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={generateVehicleImageUrl(vehicle, "01")} alt='vehicle model' fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="vehicle-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="vehicle-card__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="vehicle-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="vehicle-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="vehicle-card__btn-container">
          <Button
            title='Details'
            containerStyles='w-full py-[16px] rounded-full bg-primary-teal'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <VehicleDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} vehicle={vehicle} />
    </div>
  );
};

export default VehicleCard;
