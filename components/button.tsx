"use client";

import Image from "next/image";
import { ButtonProps } from "@types";

const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: ButtonProps) => (
  <button
    disabled={isDisabled}
    onClick={handleClick}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          fill
          src={rightIcon}
          alt="arrow_left"
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default Button;
