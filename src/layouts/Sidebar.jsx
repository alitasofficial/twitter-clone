import React, { useState } from "react";
import SideLink from "../components/SideLink";
import UserBox from "../components/UserBox";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from "../icons/icons";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  const handleMenuItemClick = (name) => {
    setActive(name);
  };

  return (
    <div className="sticky top-0 col-span-2 flex h-screen w-72 flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="mt-1 mb-4 flex h-14 w-14 transform items-center justify-center rounded-full transition-colors duration-200 hover:bg-gray-100">
          <img className="h-8 w-8" src="/twitter-logo.svg" alt="twitter logo" />
        </div>

        {/* Nav */}
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>

        {/* New Tweet Button */}
        <button className="w-11/12 transform rounded-full bg-blue-500 py-3 px-8 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-blue-600">
          Tweet
        </button>
      </div>
      {/* Profile */}
      <UserBox />
    </div>
  );
}
