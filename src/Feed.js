import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>home page</h2>
      </div>

      <TweetBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
