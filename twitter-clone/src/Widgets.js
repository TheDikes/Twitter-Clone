import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" types="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Trends for you</h2>

        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="DikeCynthia14"
          options={{ height: 200 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cynthia dike" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
