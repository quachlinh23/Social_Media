import './Profile.css'
import Topbar from '../../Components/Topbar/Topbar'
import Share from '../../Components/Share/Share'
import Post from '../../Components/Post/Post'
import { Posts, Users } from '../../Data'
import ListFriend from '../../Components/ListFriend/ListFriend'
import { useAuth } from '../../Components/context/AuthContext'; 

export default function Profile() {
  const {user} = useAuth();

  //Lọc danh sách bài post
  const userPosts = Posts.filter((p) => p.userId === user.id);
  return (
    <div> 
      <Topbar />
      <div className="profile">
        <div className="profileTop">
          <div className="profileSub">
            <img 
              src={user.profilePicture} 
              alt=""
              className="profileSubImg"
            />
          </div>
          <div className="profileMain">
            <div className="profileMainLeft">
              <img 
                src={user.profilePicture} 
                alt=""
                className="profileMainImg"
              />
            </div>
            <div className="profileMainRight">
                <span className="profileMainRightUserName">
                  {user.fullname}
                </span>
            </div>
            <hr className="profileHr"/>
          </div>
          
        </div>
        <div className="profileBottom">
          <div className="profileBottomLeft">
            <div className="profileBottomLeftTop">
              <h3 className="titleProfileText">Giới thiệu</h3>
              <div className="bio">
                {user.desc}
              </div>
            </div>

            <div className="profileBottomLeftBottom">
              <h3 className="titleProfileText">Bạn bè</h3>
              <ListFriend id={user.id} />
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
