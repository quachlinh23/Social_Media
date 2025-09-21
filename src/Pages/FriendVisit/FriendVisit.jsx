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
  const FriendInfo = Users.find((us) => us.id === Number(id));


  const coverPicture = FriendInfo.profilePicture || "assets/post/cover.jpg";

  return (
    <> 
      <Topbar />
      <div className="friendVisit">
        <div className="friendVisitTop">
            {/* Ảnh bìa */}
            <img 
                src={coverPicture}
                alt="Cover"
                className="friendVisitSubImg"
            />
            
            <div className="friendVisitMain">
                {/* Ảnh đại diện */}
                <img
                    src={FriendInfo.profilePicture} 
                    alt="Profile"
                    className="friendVisitMainImg"
                />
                
                {/* Thông tin tên và nút hành động */}
                <div className="friendVisitMainRight">
                    <span className="friendVisitMainRightUserName">
                        {FriendInfo.fullname}
                    </span>
                    <div className="friendVisitMainBtns">
                        <button className="btnFriend">
                            <Person style={{ fontSize: 18 }} /> Bạn bè
                        </button>
                        <button className="btnMessage">
                            <Message style={{ fontSize: 18 }} /> Nhắn tin
                        </button>
                    </div>
                </div>
            </div>
            {/* Đường HR sẽ không dùng ở đây */}
        </div>

        <div className="friendVisitBottom">
          <div className="friendVisitBottomLeft">
            <div className="friendVisitBottomLeftTop">
              <h3 className="titlefriendVisitText">Giới thiệu</h3>
              <div className="bio">
                {FriendInfo.desc ? FriendInfo.desc : "Chưa có giới thiệu."}
              </div>
            </div>

            <div className="friendVisitBottomLeftBottom">
              <h3 className="titlefriendVisitText">Bạn bè</h3>
              <ListFriend id={id}/>
            </div>
          </div>

          <div className="friendVisitBottomRight">
            {userPosts.length > 0 ? (
              userPosts.map((post) => <Post key={post.id} post={post} />)
            ) : (
              <div className="noPost">
                    <p className="noPostTittle">
                      Không có bài viết nào để hiển thị.
                    </p>
                </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}