import Topbar from '../../Components/Topbar/Topbar'
import './FriendVisit.css'
import { useParams } from 'react-router-dom'
import Post from '../../Components/Post/Post'
import {Posts, Users} from '../../Data'
import ListFriend from '../../Components/ListFriend/ListFriend'
import { Message, Person } from '@mui/icons-material'

export default function FriendVisit() {
  const { id } = useParams();
  const userPosts = Posts.filter((p) => p.userId === Number(id));
  const FriendInfo = Users.find((us) => us.id === Number(id))

  return (
    <> 
      <Topbar />
      <div className="friendVisit">
        <div className="friendVisitTop">
            <div className="friendVisitSub">
                <img 
                src={FriendInfo.profilePicture}
                alt=""
                className="friendVisitSubImg"
                />
            </div>
            <div className="friendVisitMain">
                <div className="friendVisitMainLeft">
                    <img
                        src={FriendInfo.profilePicture} 
                        alt=""
                        className="friendVisitMainImg"
                    />
                </div>
                <div className="friendVisitMainRight">
                    <span className="friendVisitMainRightUserName">
                    {FriendInfo.fullname}
                    </span>
                </div>
                <div className="friendVisitMainBtns">
                        <button className="btnFriend">
                            <Person /> Bạn bè
                        </button>
                        <button className="btnMessage">
                            <Message /> Nhắn tin
                        </button>
                </div>
                <hr className="friendVisitHr"/>
            </div>
        </div>
        <div className="friendVisitBottom">
          <div className="friendVisitBottomLeft">
            <div className="friendVisitBottomLeftTop">
              <h3 className="titlefriendVisitText">Giới thiệu</h3>
              <div className="bio">
                {FriendInfo.desc}
              </div>
            </div>

            <div className="friendVisitBottomLeftBottom">
              <h3 className="titlefriendVisitText">Bạn bè</h3>
              <ListFriend id={id}/>
            </div>
          </div>

          <div className="friendVisitBottomRight">
            {userPosts.map((post) => <Post post={post} />)}
          </div>
        </div>
      </div>
    </>
  )
}
