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
          <div className="profileSub">
            <img 
              src={currentUser.profilePicture} 
              alt=""
              className="profileSubImg"
            />
          </div>

          <div className="profileMain">
            <div className="profileHeader">
              <img 
                src={currentUser.profilePicture} 
                alt=""
                className="profileMainImg"
              />
              <div className="profileInfo">
                <h2 className="profileName">{currentUser.fullname}</h2>
                <div className="profileButtons">
                  <button className="profileBtn">Bạn bè</button>
                  <button className="profileBtn">Nhắn tin</button>
                </div>
              </div>
            </div>
            <hr className="profileHr"/>
          </div>
        </div>
        
        <div className="profileBottom">
          <div className="profileBottomLeft">
            <div className="profileBottomLeftTop">
              <h3 className="titleProfileText">Giới thiệu</h3>
              <div className="bio">
                {currentUser.desc}
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
                      Không có bài viết nào.
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
