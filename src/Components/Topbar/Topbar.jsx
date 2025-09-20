import "./Topbar.css";
import { Search, Person, Message, Notifications } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { Users } from "../../Data"
import { useState } from "react";
import DropAvatar from "../DropAvatar/DropAvatar";
import Notification from "../Notification/Notification";
import ChatDropDown from "../NotificationChat/NotificationChat";


export default function Topbar() {
  const userid = localStorage.getItem("UserId");
  const UserInfo = Users.find((us) => us.id === Number(userid));
  const [isDropDown, setIsDropDown] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [openChatDropDown, setOpenChatDropDown] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleDropDown(){
    setIsDropDown(!isDropDown);
  }

  function handleOpenNotification(){
    setOpenNotification(!openNotification)
  }

  function handleOpenChatDropDown(){
    setOpenChatDropDown(!openChatDropDown)
  }

  function ChooseChat(){
    setOpenChatDropDown(!openChatDropDown)
  }

  function handleSearch(){
    if(query.trim !== ""){
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  }

  const handelKey = (e) => {
    if (e.key === "Enter"){
      handleSearch();
    }
  }
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to='/' className="noLinkStyle">
          <span className="logo">SocialMedia</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search 
            className="searchIcon" 
            onClick={handleSearch}
          />
          <input
            id="search"
            placeholder="Tìm kiếm trên Social Media"
            className="searchInput"
            name="searchData"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handelKey}
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person 
              titleAccess="Lời mời kết bạn"
            />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Message 
              onClick={handleOpenChatDropDown}
              titleAccess="Tin nhắn"
            />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications 
              onClick={handleOpenNotification}
              titleAccess="Thông báo"
            />
            <span className="topbarIconBadge">7</span>
          </div>
        </div>
        <img 
          src={UserInfo.profilePicture} 
          alt="" 
          className="topbarImg"
          onClick={handleDropDown}
        />
        {isDropDown && <DropAvatar />}
        {openNotification && <Notification />}
        {openChatDropDown && <ChatDropDown/>}
      </div>
    </div>
  );
}