"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import { leagueSpartan } from "@/app/layout";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  const routes = [
    {
      href: `/mercury`,
      label: "mercury",
      active: pathname === `/mercury`,
    },
    {
      href: `/venus`,
      label: "venus",
      active: pathname === `/venus`,
    },
    {
      href: `/earth`,
      label: "earth",
      active: pathname === `/earth`,
    },
    {
      href: `/mars`,
      label: "mars",
      active: pathname === `/mars`,
    },
    {
      href: `/jupiter`,
      label: "jupiter",
      active: pathname === `/jupiter`,
    },
    {
      href: `/saturn`,
      label: "saturn",
      active: pathname === `/saturn`,
    },
    {
      href: `/uranus`,
      label: "uranus",
      active: pathname === `/uranus`,
    },
    {
      href: `/neptune`,
      label: "neptune",
      active: pathname === `/neptune`,
    },
  ];
  return (
    <nav>
      <button
        onClick={toggle}
        className=" w-5 aspect-square md:hidden"
        aria-controls="primary__navigation"
        aria-expanded="false"
        style={{
          backgroundImage: "url('/assets/icon-hamburger.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // zIndex: "999",
        }}
      >
        <span className="sr-only">Menu</span>
        <div className="hmburger" aria-hidden="true"></div>
      </button>
      <ul
        className={`fixed px-5 mt-2 lg:pt-0 pt-10 md:relative flex flex-col md:flex-row top-[3.9rem] bottom-0 inset-x-0 md:inset-0 md:gap-8 bg-tertiary-900 md:bg-transparent z-[888] transition ease-in-out delay-350 overflow-scroll md:overflow-auto md:translate-x-0 ${
          isOpen ? "translate-x-[999px]" : ""
        }  `}
        id="primary__navigation"
        data-state="closed"
        data-visible="false"
      >
        {routes.map((rout) => (
          <li
            key={rout.href}
            className={`px-11 py-8 md:px-0 md:py-0 [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-0 [&:not(:last-child)]:border-b-tertiary-100 before:content-[''] md:before:hidden  before:absolute before:left-5 first:before:bg-secondary-100 [&:nth-child(2)]:before:bg-primary-200 [&:nth-child(3)]:before:bg-secondary-400  [&:nth-child(4)]:before:bg-primary-500 [&:nth-child(5)]:before:bg-primary-300 [&:nth-child(6)]:before:bg-primary-100 [&:nth-child(7)]:before:bg-secondary-200 [&:nth-child(8)]:before:bg-secondary-700 before:w-[20px] before:h-[20px] before:border-0 before:rounded-[50%] after:content-[url(/assets/icon-chevron.svg)] after:absolute after:right-5 md:after:hidden relative`}
          >
            <Link
              href={rout.href}
              className={`text-base leading-6 tracking-[1.36px] md:text-[0.888rem] md:tracking-[1px]  ${
                rout.active
                  ? "md:before:content-[''] md:before:absolute before:bottom-[3.8rem] before:w-full before:h-[4px] first:before:bg-secondary-400 "
                  : ""
              }`}
            >
              {rout.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
