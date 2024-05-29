import { MouseEventHandler } from "react";

export interface VehicleProps {
  make: string;
  year: number;
  class: string;
  drive: string;
  model: string;
  city_mpg: number;
  cylinders: number;
  fuel_type: string;
  highway_mpg: number;
  displacement: number;
  combination_mpg: number;
  transmission: string;
}

export interface FilterProps {
  year?: number;
  fuel?: string;
  model?: string;
  limit?: number;
  manufacturer?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface VehicleCardProps {
  mpg: number;
  year: number;
  make: string;
  model: string;
  drive: string;
  cityMPG: number;
  transmission: string;
}

export interface CustomButtonProps {
  title: string;
  rightIcon?: string;
  textStyles?: string;
  isDisabled?: boolean;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  isNext: boolean;
  pageNumber: number;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
