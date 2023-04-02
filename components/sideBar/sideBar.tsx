import React from "react";
import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SideBarLogo from "./sideBarLogo";
import SideBarItem from "./sideBarItem";
import SideBarTweetBtn from "./sideBarTweetBtn";
import { IconType } from "react-icons";

const SideBar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notification",
      href: "/notification",
      icon: BsBellFill,
    },

    {
      label: "Profile",
      href: "/user",
      icon: FaUser,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SideBarLogo />
          {items.map((item) => (
            <SideBarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SideBarItem label="Logout" icon={BiLogOut} href="/logout" />
          <SideBarTweetBtn />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
