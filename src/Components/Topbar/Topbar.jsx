import "./Topbar.css";
import DropAvatar from "../DropAvatar/DropAvatar";
import Notification from "../Notification/Notification";
import ChatDropDown from "../NotificationChat/NotificationChat";
import NotificationFriendRequest from "../NotificationFriendRequest/NotificationFriendRequest";
import { Search, Person, Message, Notifications } from "@mui/icons-material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth  } from "../context/AuthContext";

export default function Topbar() {
  const { user } = useAuth ();

  const [query, setQuery] = useState("");
  const [activeDropDown, setActiveDropDown] = useState(null); // "account" | "notification" | "chat" | "friend"
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  function toggleDropDown(type) {
    setActiveDropDown(activeDropDown === type ? null : type);
  }

  // Click ra ngoài thì ẩn cửa sổ đang dropdown đi
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropDown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // đồng bộ query từ URL vào input
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("query") || "";
    setQuery(q);
  }, [location.search]);

  //Tìm kiếm thông tin
  function handleSearch() {
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/search?query=${encodeURIComponent(trimmed)}`);
    }
  }

  //Nhấn enter để tìm kiếm
  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch();
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
          <Search className="searchIcon" onClick={handleSearch}/>
          <input
            id="search"
            placeholder="Tìm kiếm trên Social Media"
            className="searchInput"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKey}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="topbarRight" ref={dropdownRef}>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person
              onClick={() => toggleDropDown("friend")}
              titleAccess="Lời mời kết bạn"
              style={{ color: activeDropDown === "friend" ? "yellow" : "" }}
            />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Message
              onClick={() => toggleDropDown("chat")}
              titleAccess="Tin nhắn"
              style={{ color: activeDropDown === "chat" ? "yellow" : "" }}
            />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications
              onClick={() => toggleDropDown("notification")}
              titleAccess="Thông báo"
              style={{ color: activeDropDown === "notification" ? "yellow" : "" }}
            />
            <span className="topbarIconBadge">7</span>
          </div>
        </div>

        <img
          src={user.profilePicture}
          alt=""
          className="topbarImg"
          onClick={() => toggleDropDown("account")}
          title="Tài khoản"
        />

        {activeDropDown === "account" && user ? (
          <DropAvatar User={user}/>
        ) : null}
        {activeDropDown === "notification" && <Notification/>}
        {activeDropDown === "chat" && <ChatDropDown />}
        {activeDropDown === "friend" && <NotificationFriendRequest />}
      </div>
    </div>
  );
}
