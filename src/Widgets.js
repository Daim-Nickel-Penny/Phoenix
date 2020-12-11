import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Phoenix" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's Happening?</h2>
        <TwitterTweetEmbed tweetId={"1282227315733172225"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="i_am_daim"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/i_am_daim"}
          options={{ text: "#ReactJS is awesome", via: "i_am_daim" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
