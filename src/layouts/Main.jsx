import React, { useEffect, useState } from "react";
import FeedList from "../components/FeedList";
import TweetBox from "../components/TweetBox";
import { PopulerIcon } from "../icons/icons";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function Main() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    (async () => {
      const colRef = collection(db, "feed");
      const snapshots = await getDocs(
        query(colRef, orderBy("timestamp", "desc"))
      );
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      // console.log(docs);
      setTweets(docs);
    })();
  }, [newTweet]);

  return (
    <main className="flex flex-1 flex-col border-l border-r border-gray-100 antialiased">
      <header className="sticky top-0 z-10 flex items-center justify-between  bg-white p-4">
        <span className="text-xl font-bold text-gray-900">Home</span>
        <PopulerIcon className="h-6 w-6 text-blue-500" />
      </header>
      <TweetBox newTweet={(e) => setNewTweet(e)} />
      <FeedList tweets={tweets} />
    </main>
  );
}
