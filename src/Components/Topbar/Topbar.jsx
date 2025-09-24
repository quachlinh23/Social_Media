import "./Topbar.css";
import { Search, Person, Message, Notifications } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { Users } from "../../Data"
import { useState, useRef, useEffect } from "react";
import DropAvatar from "../DropAvatar/DropAvatar";
import Notification from "../Notification/Notification";
import ChatDropDown from "../NotificationChat/NotificationChat";
import NotificationFriendRequest from "../NotificationFriendRequest/NotificationFriendRequest";


export default function Topbar() {
  const userid = localStorage.getItem("UserId");
  const UserInfo = Users.find((us) => us.id === Number(userid));
  const [isDropDown, setIsDropDown] = useState(false);
  const [query, setQuery] = useState("");
  const [isNotification, setIsNotification] = useState(false);
  const [isNotificationChat, setIsNotificationChat] = useState(false);
  const [isNotificationFriend, setIsNotificationFriend] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  function handleDropDown(){
    setIsDropDown(!isDropDown);
  }

  function handleOpenNotification(){
    setActiveDropDown(activeDropDown === "notification" ? null : "notification");
    setIsNotification(!isNotification);
    setIsNotificationChat(false);
    setIsNotificationFriend(false);
  }

  function handleOpenChatDropDown(){
    setActiveDropDown(activeDropDown === "chat" ? null : "chat");
    setIsNotificationChat(!isNotificationChat);
    setIsNotification(false);
    setIsNotificationFriend(false);
  }

  function handleOpenFriendDropDown(){
    setActiveDropDown(activeDropDown === "friend" ? null : "friend");
    setIsNotificationFriend(!isNotificationFriend);
    setIsNotification(false);
    setIsNotificationChat(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropDown(null);
        setIsNotificationChat(false);
        setIsNotificationFriend(false);
        setIsNotification(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            autoComplete="off"
          />
        </div>
      </div>
      <div className="topbarRight" ref={dropdownRef}>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person
              onClick={handleOpenFriendDropDown}
              titleAccess="Lời mời kết bạn"
              style={{color: isNotificationFriend ? "yellow" : ""}}
            />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Message 
              onClick={handleOpenChatDropDown}
              titleAccess="Tin nhắn"
              style={{color: isNotificationChat ? "yellow" : ""}}
            />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications 
              onClick={handleOpenNotification}
              titleAccess="Thông báo"
              style={{color: isNotification ? "yellow" : ""}}
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
        {activeDropDown === "notification" && <Notification />}
        {activeDropDown === "chat" && <ChatDropDown/>}
        {activeDropDown === "friend" && <NotificationFriendRequest/>}
      </div>
    </div>
  );
}