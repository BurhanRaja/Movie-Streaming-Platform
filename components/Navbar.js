import Image from "next/image";
import Link from "next/link";
import Search from "./Search";

import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";
import Login from "./auth/Login";
import navItems from "../utils/navData";


// Navitems
const NavItems = () => {
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
                      <li className="w-auto hover:bg-black p-2 rounded-sm px-4 block">
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

// Subscribe
const SubscribeBtn = () => (
  <button className="bg-blue-600 rounded-md text-white text-xs lg:font-semibold uppercase py-1 lg:px-4 mx-2 md:block min-[360px]:hidden">
    Subscribe
  </button>
);

// Login
const LoginBtn = ({ setToggle }) => (
  <button
    className="text-gray-200 mx-2 uppercase text-sm"
    onClick={() => setToggle(true)}
  >
    Login
  </button>
);

// Watchlist
const WatchListBtn = () => (
  <button className="rounded-md text-white text-xs lg:font-semibold uppercase py-1 lg:px-4 mx-2 md:block min-[360px]:hidden">
    Watchlist
  </button>
);

// LogOut
const LogOutBtn = ({ setLogOut }) => (
  <button className="text-gray-200 mx-2 uppercase text-sm" onClick={setLogOut}>
    Logout
  </button>
);

// Main Navbar
function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [checkToken, setCheckToken] = useState(false);

  // To close the login modal
  const close = (val) => {
    setLoginOpen(val);
  };

  // To check if token exists
  const handleCheckToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setCheckToken(true);
    }
  };

  useEffect(() => {
    handleCheckToken();
  });

  const handleLogOut = () => {
    setCheckToken(false);
    localStorage.removeItem("token");
  };

  return (
    <header className="font-roboto fixed w-[100%]" style={{ zIndex: "80" }}>
      <nav className="bg-slate-900 p-4 flex justify-between items-center">
        <div className="left lg:ml-7 flex justify-start items-center md:ml-4 sm:2">
          <span className="mx-2">
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
          {checkToken ? (
            <>
              <WatchListBtn />
              <LogOutBtn setLogOut={handleLogOut} />
            </>
          ) : (
            <>
              <SubscribeBtn />
              <LoginBtn setToggle={(val) => setLoginOpen(val)} />
            </>
          )}
        </div>
      </nav>
      {loginOpen && <Login setClose={(val) => close(val)} />}
    </header>
  );
}

export default Navbar;
