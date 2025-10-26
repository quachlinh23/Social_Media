import './Notification.css'
import { AddComment, OndemandVideo, Flag } from "@mui/icons-material";

export default function Notification() {
  return (
    <div className="notification">
      {/* Tiêu đề */}
      <div className="notificationTittle">
        Thông báo
      </div>

      {/* Danh sách thông báo */}
      <ul className="notificationList">
        <li className="notificationItem">
          {/* Avatar + icon */}
          <div className="UserImgWrapper">
            <img 
              src="/assets/Person/Person1.jpg" 
              alt="" 
              className="UserImg" 
            />
            <AddComment 
              className="IconAddComment"
              style={{
                color: "white"
              }}
            />
          </div>
          {/* Nội dung thông báo */}
          <span className="TextNotification">
            <strong>Quách</strong> Đã chia sẻ một bài viết rất hay.
          </span>
        </li>

        <li className="notificationItem">
          {/* Avatar + icon */}
          <div className="UserImgWrapper">
            <img 
              src="/assets/Person/Person1.jpg" 
              alt="" 
              className="UserImg" 
            />
            <AddComment 
              className="IconAddComment"
              style={{
                color: "white"
              }}
            />
          </div>
          {/* Nội dung thông báo */}
          <span className="TextNotification">
            <strong>Quách</strong> Đã chia sẻ một bài viết rất hay.
          </span>
        </li>

        <li className="notificationItem">
          {/* Avatar + icon */}
          <div className="UserImgWrapper">
            <img 
              src="/assets/Person/Person1.jpg" 
              alt="" 
              className="UserImg" 
            />
            <AddComment 
              className="IconAddComment"
              style={{
                color: "white"
              }}
            />
          </div>
          {/* Nội dung thông báo */}
          <span className="TextNotification">
            <strong>Quách</strong> Đã chia sẻ một bài viết rất hay.
          </span>
        </li> 
      </ul>
    </div>
  )
}