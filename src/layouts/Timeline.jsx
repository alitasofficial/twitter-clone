import React from "react";
import { SearchIcon } from "../icons/icons";
import { Timeline as Widget } from "react-twitter-widgets";

export default function Timeline() {
  return (
    <aside className="w-80">
      <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-500 focus-within:bg-white focus-within:ring-1 focus-within:ring-blue-500">
        <SearchIcon className="w-5 h-5" />
        <input
          type="search"
          placeholder="Search Twitter"
          className="placeholder-gray-300 bg-transparent focus:outline-none w-full text-sm"
        />
      </div>
      <div className="mt-5">
        <Widget
          dataSource={{
            sourceType: "profile",
            screenName: "DidemKkkaraasl1",
          }}
          options={{
            height: "1000",
            chrome: "noheader,nofooter,noscrollbar,noborders",
          }}
        />
      </div>
    </aside>
  );
}
