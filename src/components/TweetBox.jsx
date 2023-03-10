import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import {
  ImageIcon,
  EmojiIcon,
  GIFIcon,
  PollIcon,
  ScheduleIcon,
} from "../icons/icons";

export default function TweetBox({ newTweet }) {
  const [content, setContent] = useState("");

  const handleContentChange = (event) => {
    const textareaValue = event.target.value;
    setContent(textareaValue);
  };

  const sendTweet = () => {
    // If content is not empty send data to firebase
    // and set content and textarea to empty string
    if (content !== "") {
      addDoc(collection(db, "feed"), {
        displayName: "Ali Taş",
        username: "@alitas_official",
        timestamp: serverTimestamp(),
        content,
        avatar:
          "https://pbs.twimg.com/profile_images/1544944521796001795/5ALilNLp_normal.jpg",
      });
    }
    setContent("");
    newTweet(content);
  };

  return (
    <div className="items-top flex gap-2 border-b border-gray-100 p-4">
      <img
        src="https://pbs.twimg.com/profile_images/1544944521796001795/5ALilNLp_normal.jpg"
        alt="Profile"
        className="h-11 w-11 rounded-full"
      />
      <div className="w-full">
        <textarea
          placeholder="What's happening?"
          className="block w-full resize-none overflow-hidden text-lg text-gray-700 placeholder-gray-500 outline-none "
          onChange={handleContentChange}
          value={content}
        />
        <div className="flex items-center justify-between">
          <div className="flex gap-2 text-blue-400">
            <div>
              <ImageIcon className="h-6 w-6" />
            </div>
            <div>
              <GIFIcon className="h-6 w-6" />
            </div>
            <div>
              <PollIcon className="h-6 w-6" />
            </div>
            <div>
              <EmojiIcon className="h-6 w-6" />
            </div>
            <div>
              <ScheduleIcon className="h-6 w-6" />
            </div>
          </div>
          <button
            className=" transform rounded-full bg-blue-300 py-1.5 px-5 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-blue-600"
            onClick={sendTweet}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
