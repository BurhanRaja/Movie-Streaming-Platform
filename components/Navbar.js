import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";

const NavItems = () => {
  let navItems = ["TV", "Movies", "Sports", "Disney+"];

  return (
    <ul className="flex justify-center items-center text-white text-base ">
      {navItems?.map((el, index) => {
        return (
          <li key={index} className="text-gray-300 mx-4 hover:cursor-pointer">
            <a>{el}</a>
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
      <nav className="bg-slate-800 p-4 flex justify-between items-center">
        <div className="left ml-7 flex justify-start items-center">
          <span className="mx-2">
            <GiHamburgerMenu className="hover:cursor-pointer text-xl text-white" />
          </span>
          <span className="mx-3 pb-3">
            <a href="/">
              <Image src="/logo.svg" width={120} height={120} alt="Logo" />
            </a>
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
