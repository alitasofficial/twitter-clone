import React from "react";

export default function UserBox() {
  return (
    <div className="mb-2 flex cursor-pointer items-center justify-between rounded-full py-2 px-4 hover:bg-gray-100">
      <div className="flex items-center">
        <img
          src="https://pbs.twimg.com/profile_images/1544944521796001795/5ALilNLp_normal.jpg"
          alt="Profile"
          className="h-11 w-11 rounded-full"
        />
        <div className="ml-2 flex flex-col">
          <span>Ali Taş</span>
          <span>@alitas_official</span>
        </div>
      </div>
      <div className="flex space-x-1">
        <div className="h-1 w-1 rounded-full bg-gray-900" />
        <div className="h-1 w-1 rounded-full bg-gray-900" />
        <div className="h-1 w-1 rounded-full bg-gray-900" />
      </div>
    </div>
  );
}
