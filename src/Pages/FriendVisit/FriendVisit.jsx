import './FriendVisit.css'
import Topbar from '../../Components/Topbar/Topbar'
import ChatWindown from '../../Components/ChatWindown/ChatWindown';
import MiniChat from '../../Components/MiniChat/MiniChat'
import Post from '../../Components/Post/Post'
import ListFriend from '../../Components/ListFriend/ListFriend'
import { Posts, Users } from '../../Data'
import { useParams } from 'react-router-dom'
import { Message, Person, PersonAdd } from '@mui/icons-material'
import { useState } from 'react'

export default function FriendVisit() {
  const currentUser = Number(localStorage.getItem("UserId"));
  const { id } = useParams();
  const userPosts = Posts.filter((p) => p.userId === Number(id));
  const FriendInfo = Users.find((us) => us.id === Number(id));
  const [friendState, setFriendState] = useState(FriendInfo.friends.includes(currentUser));
  const [openChat, setOpenChat] = useState(false);
  const [showMini, setShowMini] = useState(false);

  function HandleFriend() {
    setFriendState(!friendState);
  }
  function OpenChat(){
    setOpenChat(!openChat);
    setShowMini(false);
  }

  function closeChat(){
    setOpenChat(false);
  }

  function MiniMum(){
    setOpenChat(false);
    setShowMini(true);
  }

  function OncloseMini(){
    setShowMini(false);
  }

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
                    <button className="btnFriend" 
                      onClick={HandleFriend}
                      title={friendState ? "Hủy kết bạn" : "Gửi lời mời"}
                    >
                      {friendState ? <Person /> : <PersonAdd />}
                      {friendState ? "Bạn bè" : "Thêm bạn bè"}
                    </button>
                  <button 
                    className="btnMessage"
                    onClick={OpenChat}
                  >
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
            {userPosts.length > 0 ? (
              userPosts.map((post) => <Post post={post} />
            )) : (
              <div className="noPost">
                    <p className="noPostTittle">
                      Không có bài viết nào.
                    </p>
                </div>
            )}
          </div>
        </div>
      </div>
      {openChat &&
        <ChatWindown 
          onClose={closeChat}
          openMini={MiniMum}
          idFriend={Number(FriendInfo.id)}
        />
      }

      {showMini &&
        <MiniChat
          onCloseMini={OncloseMini}
          openBoxChat={()=>
            OpenChat(FriendInfo.id)
          }
          idFriend={Number(FriendInfo.id)}
        />
      }
    </>
  )
}