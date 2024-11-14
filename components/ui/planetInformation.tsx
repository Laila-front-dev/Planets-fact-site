import Link from "next/link";
// import { antonio, leagueSpartanRegular } from "@/app/layout";
import { antonio, leagueSpartanRegular } from "../navigation";

interface PlanetTextProps {
  name: string;
  currentText: string;
  source: string;
}

function PlanetInformation({ name, currentText, source }: PlanetTextProps) {
  return (
    <div className="text-center md:text-left">
      <h1 className={`${antonio.className} text-[5rem] uppercase`}>{name}</h1>
      <p
        className={`${leagueSpartanRegular.className} text-[0.938rem] leading-[22px] py-6 md:w-[320px] lg:w-[297px]`}
      >
        {currentText}
      </p>
      <p className={`${leagueSpartanRegular.className} opacity-50`}>
        <span>Source : </span>
        <span>
          <Link
            href={source}
            target="_blanck"
            className="relative after:content-[''] after:absolute after:bg-[url('/assets/icon-source.svg')] after:w-[12px] after:h-[12px] after:top-0 after:left-[4.5rem]"
          >
            Wikipedia
          </Link>
        </span>
      </p>
    </div>
  );
}

export default PlanetInformation;
