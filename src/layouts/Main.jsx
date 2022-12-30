import React, { useEffect, useState } from "react";
// import Divider from "../components/Divider";
// import FeedList from "../components/FeedList";
import TweetBox from "../components/TweetBox";
import { PopulerIcon } from "../icons/icons";
// import db from "../firebase";

export default function Main() {
  return (
    <main className="flex flex-1 flex-col border-l border-r border-gray-100 antialiased">
      <header className="sticky top-0 z-10 flex items-center justify-between  bg-white p-4">
        <span className="text-xl font-bold text-gray-900">Home</span>
        <PopulerIcon className="h-6 w-6 text-blue-500" />
      </header>
      <TweetBox />
    </main>
  );
}
