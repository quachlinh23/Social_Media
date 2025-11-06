import "./FriendVisit.css";
import Topbar from "../../Components/Topbar/Topbar";
import ChatWindown from "../../Components/ChatWindown/ChatWindown";
import MiniChat from "../../Components/MiniChat/MiniChat";
import Post from "../../Components/Post/Post";
import ListFriend from "../../Components/ListFriend/ListFriend";
import { Posts, Users } from "../../Data";
import { useParams } from "react-router-dom";
import { Message, Person, PersonAdd } from "@mui/icons-material";
import { useState } from "react";
import { useAuth } from "../../Components/context/AuthContext";

export default function FriendVisit() {
  const { user } = useAuth(); // Lấy thông tin người dùng hiện tại từ context đăng nhập
  const { id } = useParams(); // Lấy id người bạn từ URL
  // Lọc danh sách bài viết theo id người bạn
  const userPosts = Posts.filter((p) => p.userId === Number(id));
  // Tìm thông tin của người bạn trong danh sách Users
  const FriendInfo = Users.find((us) => us.id === Number(id));
  // Trạng thái quan hệ bạn bè
  const [friendState, setFriendState] = useState(
    FriendInfo.friends.includes(user)
  );
  // Trạng thái hiển thị cửa sổ chat chính
  const [openChat, setOpenChat] = useState(false);
  // Trạng thái hiển thị cửa sổ mini chat
  const [showMini, setShowMini] = useState(false);

  // Xử lý khi nhấn nút "Thêm bạn bè" hoặc "Bạn bè"
  function HandleFriend() {
    setFriendState(!friendState);
  }

  // Xử lý khi mở/đóng hộp chat
  function OpenChat() {
    setOpenChat(!openChat);
    setShowMini(false);
  }

  // Đóng cửa sổ chat
  function closeChat() {
    setOpenChat(false);
  }

  // Thu nhỏ cửa sổ chat thành mini chat
  function MiniMum() {
    setOpenChat(false);
    setShowMini(true);
  }

  // Đóng mini chat
  function OncloseMini() {
    setShowMini(false);
  }

  return (
    <>
      <Topbar />
      {/* Phần thân trang FriendVisit */}
      <div className="friendVisit">
        {/* Phần trên cùng hiển thị ảnh bìa và ảnh đại diện */}
        <div className="friendVisitTop">
          {/* Ảnh bìa của bạn bè */}
          <div className="friendVisitSub">
            <img
              src={FriendInfo.profilePicture}
              alt=""
              className="friendVisitSubImg"
            />
          </div>
          {/* Ảnh đại diện và thông tin bạn bè */}
          <div className="friendVisitMain">
            <div className="friendVisitMainInfo">
              <img
                src={FriendInfo.profilePicture}
                alt=""
                className="friendVisitMainImg"
              />
              <span className="friendVisitMainRightUserName">
                {FriendInfo.fullname}
              </span>
              <div className="friendVisitMainBtns">
                <button
                  className="btnFriend"
                  onClick={HandleFriend}
                  title={friendState ? "Hủy kết bạn" : "Gửi lời mời"}
                >
                  {friendState ? <Person /> : <PersonAdd />}
                  {friendState ? "Bạn bè" : "Thêm bạn bè"}
                </button>
                <button className="btnMessage" onClick={OpenChat}>
                  <Message /> Nhắn tin
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Đường gạch ngang chia phần */}
        <hr className="friendVisitHr" />

        {/* Phần dưới gồm 2 cột: giới thiệu + bài viết */}
        <div className="friendVisitBottom">
          <div className="friendVisitBottomLeft">
            <div className="friendVisitBottomLeftTop">
              <h3 className="titlefriendVisitText">Giới thiệu</h3>
              <div className="bio">{FriendInfo.desc}</div>
            </div>

            <div className="friendVisitBottomLeftBottom">
              <h3 className="titlefriendVisitText">Bạn bè</h3>
              <ListFriend id={id} />
            </div>
          </div>

          <div className="friendVisitBottomRight">
            {userPosts.length > 0 ? (
              userPosts.map((post) => <Post post={post} />)
            ) : (
              <div className="noPost">
                <p className="noPostTittle">Không có bài viết nào.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cửa sổ chat chính (hiển thị khi openChat = true) */}
      {openChat && (
        <ChatWindown
          onClose={closeChat}
          openMini={MiniMum}
          idFriend={Number(FriendInfo.id)}
        />
      )}

      {/* Mini chat (hiển thị khi showMini = true) */}
      {showMini && (
        <MiniChat
          onCloseMini={OncloseMini}
          openBoxChat={() => OpenChat(FriendInfo.id)}
          idFriend={Number(FriendInfo.id)}
        />
      )}
    </>
  );
}
