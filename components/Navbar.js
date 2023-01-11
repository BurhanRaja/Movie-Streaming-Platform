import Image from "next/image";
import Link from "next/link";
import Search from "./Search";

import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";

const NavItems = () => {
  let navItems = [
    {
      item: "TV",
      dropItems: [
        {
          name: "Action",
          link: "/shows/genre/10759"
        }, 
        {
          name: "Drama",
          link: "/shows/genre/18"
        }, 
        {
          name: "Comedy",
          link: "/shows/genre/35"
        }, 
        {
          name: "Scifi",
          link: "/shows/genre/10765"
        }, 
        {
          name: "Family",
          link: "/shows/genre/10751"
        }, 
        {
          name: "Mystery",
          link: "/shows/genre/9648"
        },
        {
          name: "Documentary",
          link: "/shows/genre/99"
        }
      ],
    },
    {
      item: "Movies",
      dropItems: [
        {
          name: "Hindi",
          link: "/movies/lang/hi"
        },
        {
          name: "English",
          link: "/movies/lang/en"
        },
        {
          name: "Korean",
          link: "/movies/lang/ko"
        },
        {
          name: "Japanese",
          link: "/movies/lang/ja"
        },],
    },
    {
      item: "Sports",
      dropItems: [],
    },
    {
      item: "Disney+",
      dropItems: [],
    },
  ];

  return (
    <ul className="flex justify-center items-center text-white text-base xl:flex md:hidden min-[360px]:hidden">
      {navItems?.map((el) => {
        if (el.item === "Disney+") {
          return (
            <li
              key={el.item}
              className="text-gray-300 px-4 hover:cursor-pointer relative group/item-1 py-4"
            >
              <Link href="/disney">{el.item}</Link>
            </li>
          );
        }
        return (
          <li
            key={el.item}
            className="text-gray-300 px-4 hover:cursor-pointer relative group/item-1 py-4"
          >
            <a>{el.item}</a>
            <ul className="absolute z-50 top-12 left-0 bg-slate-800 rounded-md opacity-0 hidden translate-y-6 group-hover/item-1:block group-hover/item-1:opacity-100 group-hover/item-1:translate-y-0 transition-all duration-500">
              {el.dropItems &&
                el.dropItems?.map((item) => {
                  return (
                    <Link href={item.link} key={item.name}>
                    <li
                      className="w-auto hover:bg-black p-2 rounded-sm px-4 block"
                    >
                      {item.name}
                    </li>
                    </Link>
                  );
                })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};


const SubscribeBtn = () => (
  <button className="bg-blue-600 rounded-md text-white text-xs lg:font-semibold uppercase py-1 lg:px-4 mx-2 md:block min-[360px]:hidden">
    Subscribe
  </button>
);

const LoginBtn = () => (
  <button className="text-gray-200 mx-2 uppercase text-sm">Login</button>
);

function Navbar() {
  return (
    <header className="font-roboto">
      <nav className="bg-slate-900 p-4 flex justify-between items-center">
        <div className="left lg:ml-7 flex justify-start items-center md:ml-4 sm:2">
          <span className="mx-2">
            <GiHamburgerMenu className="hover:cursor-pointer text-xl text-white lg:block md:hidden sm:hidden min-[360px]:hidden" />
            <Menu />
          </span>
          <span className="mx-3 pb-3 md:block sm:hidden min-[360px]:hidden">
            <Link href="/">
              <Image src="/logo.svg" width={120} height={120} alt="Logo" />
            </Link>
          </span>
          <NavItems />
        </div>
        <div className="right mr-7 flex justify-end items-center xl:w-[33%] lg:w-[40%] md:w-[50%] sm:w[55%]">
          <Search />
          <SubscribeBtn />
          <LoginBtn />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
