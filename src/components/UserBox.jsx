import React from "react";

export default function UserBox() {
  return (
    <div className="flex items-center justify-between mb-2 py-2 px-4 hover:bg-gray-100 cursor-pointer rounded-full">
      <div className="flex items-center">
        <img
          src="https://pbs.twimg.com/profile_images/1544944521796001795/5ALilNLp_normal.jpg"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
        <div className="flex flex-col ml-2">
          <span>Ali Taş</span>
          <span>@alitas_official</span>
        </div>
      </div>
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
        <div className="w-1 h-1 bg-gray-900 rounded-full" />
      </div>
    </div>
  );
}
