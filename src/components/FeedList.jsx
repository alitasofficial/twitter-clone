import React from "react";
import FeedItem from "./FeedItem";

export default function FeedList({ tweets }) {
  return (
    <div>
      {tweets.map((tweet, index) => (
        <FeedItem {...tweet} key={index} />
      ))}
    </div>
  );
}
