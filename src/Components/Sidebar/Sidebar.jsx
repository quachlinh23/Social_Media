import { People, Groups, History, TurnedIn, InsertInvitation,
  ExpandMore, ExpandLess, Newspaper,
  VideogameAsset,
  Message,
  Cake,
  MovieCreation
 } from '@mui/icons-material'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { Users } from '../../Data'
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Sidebar() {
  const {user} = useAuth();
  // const userId = localStorage.getItem("UserId");
  // const curentUser = Users.find((us) => us.id === Number(userId));
  const [extend, setExtend] = useState(false);

  function handleExtend() {
    setExtend(!extend);
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to={`/profile/${user.id}`} className="noLinkStyle">
            <li className="sidebarListItem">
              <div className="avatar">
                <img  
                  className="avatarImg"
                  src={user.profilePicture} 
                  alt="" 
                />  
              </div>
              <span className="sidebarListItemText">
                {user.fullname}
              </span>
            </li>
          </Link>
          <li className="sidebarListItem">
            <People 
              className="sidebarIcon"
              style={{color: '#4CAF50'}}
            />
            <span className="sidebarListItemText">
              Bạn bè
            </span>
          </li>
          <li className="sidebarListItem">
            <Groups 
              className="sidebarIcon"
              style={{color: '#42A5F5'}}
            />
            <span className="sidebarListItemText">
              Nhóm
            </span>
          </li>
          <li className="sidebarListItem">
            <InsertInvitation 
              className="sidebarIcon"
              style={{color: '#FF9800'}}
            />
            <span className="sidebarListItemText">
              Sự kiện
            </span>
          </li>
          <li className="sidebarListItem">
            <History 
              className="sidebarIcon"
              style={{color: '#AB47BC'}}
            />
            <span className="sidebarListItemText">
              Kỷ niệm
            </span>
          </li>
          <li className="sidebarListItem">
            <TurnedIn 
              className="sidebarIcon"
              style={{color: '#FF6F61'}}
            />
            <span className="sidebarListItemText">
              Đã lưu
            </span>
          </li>

          {extend && 
          <>
            <li className="sidebarListItem">
              <Newspaper 
                className="sidebarIcon"
                style={{color: '#009688'}}
              />
              <span className="sidebarListItemText">
                Bảng feed
              </span>
            </li>

            <li className="sidebarListItem">
              <VideogameAsset 
                className="sidebarIcon"
                style={{color: '#CDDC39'}}
              />
              <span className="sidebarListItemText">
                Chơi game
              </span>
            </li>
            <li className="sidebarListItem">
              <Message 
                className="sidebarIcon"
                style={{color: '#1976D2'}}
              />
              <span className="sidebarListItemText">
                Messenger
              </span>
            </li>
            <li className="sidebarListItem">
              <Cake 
                className="sidebarIcon"
                style={{color: '#E91E63'}}
              />
              <span className="sidebarListItemText">
                Sinh nhật
              </span>
            </li>

            <li className="sidebarListItem">
              <MovieCreation 
                className="sidebarIcon"
                style={{color: '#FF5722'}}
              />
              <span className="sidebarListItemText">
                Reels
              </span>
            </li>
          </>
          }
          <li className="sidebarListItem" onClick={handleExtend}>
            {!extend ? 
              <ExpandMore className="sidebarIcon" /> :
              <ExpandLess className="sidebarIcon" />
            }
            <span className="sidebarListItemText">
              {!extend ? "Xem thêm" : "Ẩn bớt" }
            </span>
          </li>
          <hr className="sidebarHr"/>

          <span className="TitleSidebar">Lối tắt của bạn</span>
          <li className="sidebarListItem">
            SGU Confessions - Đại Học Sài Gòn
          </li>

          <li className="sidebarListItem">
            Candy Crush Soda Saga
          </li>

          <li className="sidebarListItem">
            Blossom Blast Saga
          </li>  
        </ul>
      </div>
    </div>
  )
}