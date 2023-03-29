import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />}
                {username}
              </span>
            </h3>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>

            <img src={image} alt="" />
            <div className="post__footer">
              <ChatBubbleOutlineIcon fontsize="small" />
              <RepeatIcon fontsize="small" />
              <FavoriteBorderIcon fontsize="small" />
              <PublishIcon fontsize="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
