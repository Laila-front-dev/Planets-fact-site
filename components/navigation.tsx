import Container from "./ui/container";
import MainNav from "./main-nav";
// import { antonio } from "@/app/layout";
// import { antonio } from "@/app/(planets)/page";
import Link from "next/link";
import localFont from "next/font/local";

export const antonio = localFont({
  src: "../app/fonts/Antonio-Medium.woff",
  weight: "500",
});

export const leagueSpartanRegular = localFont({
  src: "../app/fonts/LeagueSpartan-Regular.woff",
  weight: "400",
});

const Navigation = () => {
  return (
    <header className="fixed md:relative w-full uppercase py-4 bg-tertiary-900 border-b border-b-tertiary-100 h-[69px] md:h-fit md:py-[32px] z-[999]">
      <Container>
        <div className=" flex md:flex-col lg:flex-row items-center justify-between">
          <Link href="/">
            <span className={`${antonio.className} text-[22px]`}>
              the planets
            </span>
          </Link>
          <MainNav />
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
