import React from "react";
import { ReplyIcon, ReTweetIcon, LikeIcon, ShareIcon } from "../icons/icons";

export default function FeedItem({
  avatar,
  content,
  displayName,
  image,
  timestamp,
  username,
}) {
  return (
    <article className="border-gray-extraLight flex cursor-pointer space-x-3 border-b px-4 py-3">
      <img src={avatar} alt="Profile" className="h-11 w-11 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold">{displayName}</h4>
          <span className="text-gray-dark ml-2">{username}</span>
          <div className="bg-gray-dark mx-2 h-1 w-1 rounded-full border" />
          <span className="text-gray-dark">
            {timestamp?.toDate().toLocaleTimeString("tr-TR")}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-900">{content}</p>
        {image && (
          <img alt="tweet" src={image} className="my-2 max-h-96 rounded-xl" />
        )}
        <ul className="-ml-1 mt-3 flex max-w-md justify-between">
          <li className="text-gray-dark group  flex items-center space-x-3 text-sm">
            <div className="group-hover:bg-primary-light flex h-8 w-8 items-center justify-center rounded-full ">
              <ReplyIcon className="group-hover:text-primary-base h-5 w-5" />
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>

          <li className="text-gray-dark group  flex items-center space-x-3 text-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-full group-hover:bg-green-200 ">
              <ReTweetIcon className="h-5 w-5 group-hover:text-green-400" />
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>

          <li className="text-gray-dark group  flex items-center space-x-3 text-sm">
            <div className="flex h-8 w-8 items-center justify-center rounded-full group-hover:bg-pink-200 ">
              <LikeIcon className="group-hover:text-gray-dark h-5 w-5" />
            </div>
            <span className="group-hover:text-pink-400">7</span>
          </li>

          <li className="text-gray-dark group  flex items-center space-x-3 text-sm">
            <div className="group-hover:bg-primary-light flex h-8 w-8 items-center justify-center rounded-full ">
              <ShareIcon className="group-hover:text-primary-base h-5 w-5" />
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
}
