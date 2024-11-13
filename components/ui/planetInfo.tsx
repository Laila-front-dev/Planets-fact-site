"use client";
import Image from "next/image";
import { useState } from "react";
import PlanetInformation from "@/components/ui/planetInformation";
import Button from "@/components/ui/button";

interface PlanetInfoProps {
  name: string;
  color: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

const PlanetInfo = ({
  name,
  color,
  overview,
  structure,
  geology,
  images,
}: PlanetInfoProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const colors = {
    mercury: "md:bg-secondary-600",
    venus: "md:bg-primary-400",
    earth: "md:bg-secondary-500",
    mars: "md:bg-tertiary-500",
    jupiter: "md:bg-primary-700",
    saturn: "md:bg-primary-800",
    uranus: "md:bg-secondary-300",
    neptune: "md:bg-secondary-700",
  };
  const colorVariants: { [key: string]: string } = {
    blue: color,
  };

  const buttonColorClass = colorVariants["blue"];
  const [currentText, setCurrentText] = useState(overview.content);
  const [currentImage, setCurrentImage] = useState(images.planet);
  const [currentBgImage, setCurrentBgImage] = useState("");
  const [selectedButton, setSelectedButton] = useState("overview");

  const handleOverviewClick = () => {
    setCurrentText(overview.content);
    setCurrentImage(images.planet);
    setCurrentBgImage("");
    setSelectedButton("overview");
  };

  const handleStructureClick = () => {
    setCurrentText(structure.content);
    setCurrentImage(images.internal);
    setCurrentBgImage("");
    setSelectedButton("structure");
  };

  const handleGeologyClick = () => {
    setCurrentText(geology.content);
    setCurrentBgImage(images.geology);
    setCurrentImage(images.planet);
    setSelectedButton("geology");
  };

  return (
    <div className="grid lg:grid-cols-2 m-auto">
      <div
        className={`m-auto w-[111px] h-[111px] md:w-[184px] md:h-[184px] lg:w-[290px] lg:h-[290px] relative py-[93px] md:py-[140px] lg:py-0`}
      >
        <Image
          src={currentImage}
          width={290}
          height={290}
          alt={name}
          className="relative"
        />
        <div
          className="w-[80px] h-[100px] lg:left-5 m-[1rem] md:w-[150px] md:h-[184px] lg:ml-[3.3rem] lg:mt-[-4rem] relative z-10"
          style={{
            backgroundImage: `url(${currentBgImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // position: "absolute",
          }}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-1 pt-[150px] md:pt-[250px] gap-10">
        <PlanetInformation
          name={name}
          currentText={currentText}
          source={overview.source}
        />

        <div className="absolute top-0 left-0 border-b grid grid-cols-3 w-full py-5 md:relative md:border-none md:grid-cols-1 md:gap-5">
          <Button
            overview="overview"
            internalStructure="internal"
            surfaceGeology="surface"
            onOverviewClick={handleOverviewClick}
            onInternalStructureClick={handleStructureClick}
            onSurfaceGeologyClick={handleGeologyClick}
            changeColorOne={
              selectedButton === "overview"
                ? `text-white before:content-[''] before:absolute before:bottom-0 before:w-[4.5rem] before:h-[0.3rem] before:bg-secondary-600 md:before:w-0 md:before:relative  md:before:bg-transparent ${buttonColorClass} md:border-none opacity-100`
                : "opacity-50"
            }
            changeColorTwo={
              selectedButton === "structure"
                ? `text-white before:content-[''] before:absolute before:bottom-0 before:w-[4.5rem] before:h-[0.3rem] before:bg-secondary-600 md:before:w-0 md:before:relative  md:before:bg-transparent ${buttonColorClass} md:border-none opacity-100`
                : "opacity-50"
            }
            changeColorThree={
              selectedButton === "geology"
                ? `text-white before:content-[''] before:absolute before:bottom-0 before:w-[4.5rem] before:h-[0.3rem] before:bg-secondary-600 md:before:w-0 md:before:relative  md:before:bg-transparent ${buttonColorClass} md:border-none opacity-100`
                : "opacity-50"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PlanetInfo;
