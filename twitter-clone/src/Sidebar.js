import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { Avatar } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={TagIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <Button variant="contained" id="sidebar__tweet">
        <span>Tweet</span>
        <HistoryEduIcon className="HistoryEduIcon" />
      </Button>

      
      <div className="avatar">
        <Avatar src="https://assets.webiconspng.com/uploads/2017/09/Avatar-PNG-Image-13248.png" />
        <h4 href="/settings">
          Cynthia Dike
          <g>@DikeCynthia14</g>
          <a href="/i/flow/login" hidden='true'>Add an existing account</a>
          <a href="/logout" hidden='true'>Log out @DikeCynthia14</a><i>...</i>
        </h4>
    </div>
    </div>
  );
}

export default Sidebar;
