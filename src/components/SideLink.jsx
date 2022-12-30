import React from "react";

export default function SideLink({ name, Icon, active, onMenuItemClick }) {
  const isActive = active === name;
  return (
    <li className="group cursor-pointer" onClick={() => onMenuItemClick(name)}>
      <a
        href={name.toLowerCase()}
        className="block text-xl pointer-events-none"
      >
        <div className="inline-block">
          <div
            className={`flex items-center mb-2 py-3 px-3 group-hover:bg-gray-100 transform transition duration-200 rounded-full ${
              isActive && "text-blue-500"
            }`}
          >
            <Icon />
            <span className="ml-4 pr-2 font-semibold"> {name} </span>
          </div>
        </div>
      </a>
    </li>
  );
}
