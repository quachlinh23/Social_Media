import './Notification.css'
import { AddComment, OndemandVideo, Flag } from "@mui/icons-material";

export default function Notification() {
  return (
    <div className="notification">
        <div className="notificationTittle">
          Thông báo
        </div>
        <ul className="notificationList">
            <li className="notificationItem">
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
                <span className="TextNotification">
                  <strong>Quách</strong> Đã chia sẻ một bài viết rất hay.
                </span>
            </li>

            <li className="notificationItem">
                <div className="UserImgWrapper">
                    <img 
                        src="/assets/Person/Person1.jpg" 
                        alt="" 
                        className="UserImg" 
                    />
                    <OndemandVideo 
                      className="IconAddVideo"
                      style={{
                        color: "white"
                      }}
                    />
                </div>
                <span className="TextNotification">
                  <strong>Quách</strong> Đã chia sẻ một video.
                </span>
            </li>

            <li className="notificationItem">
                <div className="UserImgWrapper">
                    <img 
                        src="/assets/Person/Person1.jpg" 
                        alt="" 
                        className="UserImg" 
                    />
                    <Flag 
                      className="IconAddFlag"
                      style={{
                        color: "white"
                      }}
                    />
                </div>
                <span className="TextNotification">
                  <strong>Quách</strong> Đã mời bạn tham gia nhóm lập trình hiện đại.
                </span>
            </li> 
        </ul>
    </div>
  )
}