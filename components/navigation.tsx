import Container from "./ui/container";
import MainNav from "./main-nav";
import { antonio } from "@/app/layout";
import Link from "next/link";

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
