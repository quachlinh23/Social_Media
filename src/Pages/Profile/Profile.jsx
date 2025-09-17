import Topbar from '../../Components/Topbar/Topbar'
import Share from '../../Components/Share/Share'
import './Profile.css'
import { useParams } from 'react-router-dom'
import Post from '../../Components/Post/Post'
import {Posts, Users} from '../../Data'
import ListFriend from '../../Components/ListFriend/ListFriend'

export default function Profile() {
  const { id } = useParams();
  const userPosts = Posts.filter((p) => p.userId === Number(id));
  const UserInfo = Users.find((us) => us.id === Number(id));

  return (
    <div> 
      <Topbar />
      <div className="profile">
        <div className="profileTop">
          <div className="profileSub">
            <img 
              src={UserInfo.profilePicture} 
              alt=""
              className="profileSubImg"
            />
          </div>
          <div className="profileMain">
            <div className="profileMainLeft">
              <img 
                src={UserInfo.profilePicture} 
                alt=""
                className="profileMainImg"
              />
            </div>
            <div className="profileMainRight">
                <span className="profileMainRightUserName">
                  {UserInfo.username}
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
                Xin chào các bạn.
              </div>
            </div>

            <div className="profileBottomLeftBottom">
              <h3 className="titleProfileText">Bạn bè</h3>
              <ListFriend id={UserInfo.id} />
            </div>
          </div>

          <div className="profileBottomRight">
            <Share />
            {userPosts.map((post) => <Post key={post.id} post={post} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
