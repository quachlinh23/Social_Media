import { RssFeed, People, Groups, History, TurnedIn, InsertInvitation } from '@mui/icons-material'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { Users } from '../../Data'

export default function Sidebar() {

  const userId = localStorage.getItem("UserId");
  const User = Users.find((us) => us.id === Number(userId));

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <div className="avatar">
                  <Link to={`/profile/${User.id}`} className="noLinkStyle">
                    <img  
                      className="avatarImg"
                      src={User.profilePicture} 
                      alt="" 
                    />
                  </Link>
                </div>
                <span className="sidebarListItemText">
                  <Link to='/Profile/1' className="noLinkStyle">
                    {User.username}
                  </Link>
                  
                </span>
            </li>
            <li className="sidebarListItem">
              <People className="sidebarIcon"/>
              <span className="sidebarListItemText">
                Bạn bè
              </span>
            </li>
            <li className="sidebarListItem">
              <Groups className="sidebarIcon"/>
              <span className="sidebarListItemText">
                Nhóm
              </span>
            </li>
            <li className="sidebarListItem">
              <InsertInvitation className="sidebarIcon"/>
              <span className="sidebarListItemText">
                Sự kiện
              </span>
            </li>
            <li className="sidebarListItem">
              <History className="sidebarIcon"/>
              <span className="sidebarListItemText">
                Kỷ niệm
              </span>
            </li>
            <li className="sidebarListItem">
              <TurnedIn className="sidebarIcon"/>
              <span className="sidebarListItemText">
                Đã lưu
              </span>
            </li>
            <hr className="sidebarHr"/>
        </ul>
      </div>
    </div>
  )
}
