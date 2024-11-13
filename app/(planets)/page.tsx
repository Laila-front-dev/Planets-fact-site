import { Metadata } from "next";

import Container from "@/components/ui/container";
import { antonio } from "../layout";
import { leagueSpartanRegular } from "../layout";
import StstemSolaire from "@/components/system-solaire";
import PlanetBg from "@/components/planetBg";

export const metadata: Metadata = {
  title: "the Planets",
  description:
    "The solar system has eight planets: Mercury, Venus, Earth, Mars,Jupiter, Saturn, Uranus, and Neptune. There are five officiallyrecognized dwarf planets in our solar system: Ceres, Pluto,Haumea, Makemake, and Eris.",
};

const Page: React.FC = () => {
  return (
    <main className="md:h-[100vh]">
      <div style={{ position: "absolute", width: "100vw", height: "inherit" }}>
        <PlanetBg />
      </div>
      <Container>
        <section className="pt-[10rem] lg:flex lg:items-center">
          <div className="md:w-[37rem]">
            <h1 className={`${antonio.className} uppercase text-[2.5rem]`}>
              the Planets
            </h1>
            <p
              className={`${leagueSpartanRegular.className} text-base leading-6 pt-10`}
            >
              The solar system has eight planets: Mercury, Venus, Earth, Mars,
              Jupiter, Saturn, Uranus, and Neptune. There are five officially
              recognized dwarf planets in our solar system: Ceres, Pluto,
              Haumea, Makemake, and Eris.
            </p>
          </div>
          <div className="w-[21.50rem] h-[20rem] md:w-[86rem] md:h-[20rem]">
            <StstemSolaire />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Page;
