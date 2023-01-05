import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const NavItems = () => {
  let navItems = [
    {
      item: "TV",
      dropItems: [
        {
          name: "Action",
          link: "/shows/action"
        }, 
        {
          name: "Drama",
          link: "/shows/drama"
        }, 
        {
          name: "Comedy",
          link: "/shows/comedy"
        }, 
        {
          name: "Romantic",
          link: "/shows/romantic"
        }, 
        {
          name: "Mystery",
          link: "/shows/mystery"
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
    <ul className="flex justify-center items-center text-white text-base ">
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
            <ul className="absolute group-hover/item-1:z-50 top-12 left-0 bg-slate-800 rounded-md opacity-0 translate-y-6 group-hover/item-1:opacity-100 group-hover/item-1:translate-y-0 transition-all duration-500">
              {el.dropItems &&
                el.dropItems?.map((item) => {
                  return (
                    <li
                      key={item.name}
                      className="w-auto hover:bg-black p-2 rounded-sm px-4 block"
                    >
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  );
                })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

const Search = () => (
  <div className="flex justify-end w-[100%] mx-2">
    <input
      type="text"
      className="border-b-2 focus:border-blue-600 transition-all bg-transparent w-[75%] focus:w-[100%] focus:outline-0 text-gray-200 z-10"
      name="search"
      id="search"
      placeholder="Search"
    />
    <button className="pb-2 hover:cursor-default z-0">
      <AiOutlineSearch className="text-gray-500 ml-[-20px]" />
    </button>
  </div>
);

const SubscribeBtn = () => (
  <button className="bg-blue-600 rounded-md text-white text-xs font-semibold uppercase py-1 px-4 mx-2">
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
        <div className="left ml-7 flex justify-start items-center">
          <span className="mx-2">
            <GiHamburgerMenu className="hover:cursor-pointer text-xl text-white" />
          </span>
          <span className="mx-3 pb-3">
            <Link href="/">
              <Image src="/logo.svg" width={120} height={120} alt="Logo" />
            </Link>
          </span>
          <NavItems />
        </div>
        <div className="right mr-7 flex justify-end items-center w-[33%]">
          <Search />
          <SubscribeBtn />
          <LoginBtn />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
