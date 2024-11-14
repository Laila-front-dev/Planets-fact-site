"use client";

import React from "react";

interface buttonsProps {
  overview: string;
  internalStructure: string;
  surfaceGeology: string;
  onOverviewClick: () => void;
  onInternalStructureClick: () => void;
  onSurfaceGeologyClick: () => void;
  changeColorOne: string;
  changeColorTwo: string;
  changeColorThree: string;
}

const Button = ({
  overview,
  internalStructure,
  surfaceGeology,
  changeColorOne,
  changeColorTwo,
  changeColorThree,
  onOverviewClick,
  onInternalStructureClick,
  onSurfaceGeologyClick,
}: buttonsProps) => {
  return (
    <>
      <button
        onClick={onOverviewClick}
        className={`uppercase text-xs tracking-[1.93px] opacity-50 md:text-left md:pl-7 md:opacity-100 md:text-base md:border md:before:content-['01'] md:before:m-4 md:before:opacity-50 lg:h-[48px] lg:w-[350px] p-4 md:p-0 lg-hover:bg-[#d8d8d84d] ${changeColorOne}`}
      >
        {overview}
      </button>
      <button
        onClick={onInternalStructureClick}
        className={`uppercase text-xs tracking-[1.93px] opacity-50 md:text-left md:pl-7 md:opacity-100 md:text-base md:border md:before:content-['01'] md:before:m-4 md:before:opacity-50 after:content-['structure'] md:after:m-2 md:[&:nth-child(2)]:before:content-['02'] lg:h-[48px] lg:w-[350px] lg-hover:bg-[#d8d8d84d] ${changeColorTwo}`}
      >
        <span className="hidden md:inline-block">{internalStructure}</span>
      </button>
      <button
        onClick={onSurfaceGeologyClick}
        className={`uppercase text-xs tracking-[1.93px] opacity-50 md:text-left md:pl-7 md:opacity-100 md:text-base md:border md:before:content-['01'] md:before:m-4 md:before:opacity-50 after:content-['geology'] md:after:m-2 md:[&:nth-child(3)]:before:content-['03'] lg:h-[48px] lg:w-[350px] lg-hover:bg-[#d8d8d84d] ${changeColorThree}`}
      >
        <span className="hidden md:inline-block">{surfaceGeology}</span>
      </button>
    </>
  );
};

export default Button;
