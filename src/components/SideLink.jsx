import React from "react";

export default function SideLink({ name, Icon, active, onMenuItemClick }) {
  const isActive = active === name;
  return (
    <li className="group cursor-pointer" onClick={() => onMenuItemClick(name)}>
      <a
        href={name.toLowerCase()}
        className="pointer-events-none block text-xl"
      >
        <div className="inline-block">
          <div
            className={`mb-2 flex transform items-center rounded-full py-3 px-3 transition duration-200 group-hover:bg-gray-100 ${
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
