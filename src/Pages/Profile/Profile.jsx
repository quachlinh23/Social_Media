import './Profile.css'
import Topbar from '../../Components/Topbar/Topbar'
import Share from '../../Components/Share/Share'
import Post from '../../Components/Post/Post'
import { Posts, Users } from '../../Data'
import ListFriend from '../../Components/ListFriend/ListFriend'

export default function Profile() {
  const currentUserId = Number(localStorage.getItem("UserId"));
  const userPosts = Posts.filter((p) => p.userId === currentUserId);
  const currentUser = Users.find((us) => us.id === currentUserId);

  return (
    <div> 
      <Topbar />
      <div className="profile">
        <div className="profileTop">
          {/* Ảnh bìa */}
          <img 
            src={currentUser.profilePicture || "assets/post/cover.jpg"} // Giả sử có coverPicture, nếu không dùng ảnh mặc định
            alt="Cover"
            className="profileSubImg"
          />

          <div className="profileMain">
            {/* Ảnh đại diện */}
            <img 
              src={currentUser.profilePicture} 
              alt="Profile"
              className="profileMainImg"
            />
            <div className="profileInfo">
              <h2 className="profileName">{currentUser.fullname}</h2>
              <div className="profileButtons">
                <button className="profileBtn">
                  {/* Icon Friend nếu có */}
                  <i className="fas fa-user-friends"></i> Bạn bè
                </button>
                <button className="profileBtn">
                  {/* Icon Message nếu có */}
                  <i className="fas fa-comment-alt"></i> Nhắn tin
                </button>
              </div>
            </div>
          </div>
          {/* Đường HR sẽ không dùng ở đây nữa */}
        </div>
        
        <div className="profileBottom">
          <div className="profileBottomLeft">
            <div className="profileBottomLeftTop">
              <h3 className="titleProfileText">Giới thiệu</h3>
              <div className="bio">
                {currentUser.desc ? currentUser.desc : "Chưa có giới thiệu."}
              </div>
            </div>

            <div className="profileBottomLeftBottom">
              <h3 className="titleProfileText">Bạn bè</h3>
              <ListFriend id={currentUser.id} />
            </div>
          </div>

          <div className="profileBottomRight">
            <Share />
            {userPosts.length > 0 ? (
              userPosts.map((post) => 
                <Post key={post.id} post={post} />
              )) : (
                <div className="noPost">
                    <p className="noPostTittle">
                      Không có bài viết nào để hiển thị.
                    </p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}