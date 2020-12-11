import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png" />
          <input placeholder="What's Happening" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter Image"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
