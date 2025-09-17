import "./Topbar.css";
import { Search, Person, Message, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Users } from "../../Data"
import { useState } from "react";
import DropAvatar from "../DropAvatar/DropAvatar";


export default function Topbar() {
  const userid = localStorage.getItem("UserId");
  const UserInfo = Users.find((us) => us.id === Number(userid));
  const [isDropDown, setIsDropDown] = useState(false);

  function handleDropDown(){
    setIsDropDown(!isDropDown);
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
          <Search className="searchIcon" />
          <input
            id="search"
            placeholder="Tìm kiếm trên Social Media"
            className="searchInput"
            name="searchData"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Message />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications  />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
        <img 
          src={UserInfo.profilePicture} 
          alt="" 
          className="topbarImg"
          onClick={handleDropDown}
        />
        {isDropDown && <DropAvatar />}
      </div>
    </div>
    
  );
}