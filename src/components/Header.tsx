import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import HeaderItem from "./HeaderItem";
import wade from "./../assets/Images/wade.png";
import {
  HiHome,
  HiStar,
  HiPlayCircle,
  HiMagnifyingGlass,
  HiTv,
  HiPlus,
} from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
function Header() {
  // Manage the toggle
  const [toggle, setToggle] = useState(false);
  // Constant for the Menu
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];
  return (
    <div className="flex justify-between p-6">
      <div className="flex  items-center gap-8">
        <img
          src={logo}
          alt="logo"
          className="w-[80px] md:w-[115px] object-cover "
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex gap-8 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
          <div onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border border-gray-700 p-3 px-5">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img src={wade} alt="profil" className="w-[40px] rounded-full" />
    </div>
  );
}

export default Header;
