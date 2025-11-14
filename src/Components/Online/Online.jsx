import { Users } from "../../Data";
import { useState } from "react";
import ChatWindown from "../ChatWindown/ChatWindown";
import "./Online.css";
import MiniChat from "../MiniChat/MiniChat";
import { useAuth } from "../context/AuthContext";

export default function Online() {
  // Lấy thông tin người dùng hiện tại
  const { user } = useAuth();

  // Lấy danh sách ID bạn bè
  const currentUser = user;
  const friendIds = currentUser?.friends || [];

  // Lọc ra danh sách bạn bè từ dữ liệu Users
  const friendList = Users.filter((friendList) =>
    friendIds.includes(Number(friendList.id))
  );

  // State quản lý cửa sổ chat và mini chat
  const [openChat, setOpenChat] = useState(false);
  const [showMini, setShowMini] = useState(false);
  const [idFriend, setIdFriend] = useState();

  // Mở hoặc đóng cửa sổ chat chính
  function OpenChat(idFriendChat) {
    setOpenChat(!openChat);
    setShowMini(false);
    setIdFriend(idFriendChat);
  }

  // Đóng cửa sổ chat chính
  function closeChat() {
    setOpenChat(false);
  }

  // Thu nhỏ chat sang mini chat
  function MiniMum() {
    setOpenChat(false);
    setShowMini(true);
  }

  // Đóng mini chat
  function OncloseMini() {
    setShowMini(false);
  }

  return (
    <ul className="rightbarFriendList">
      {/* Render danh sách bạn bè online */}
      {friendList.map((us) => (
        <li
          className="rightbarFriend"
          key={us.id}
          onClick={() => {
            OpenChat(us.id);
          }}
        >
          <div className="rightbarProfileImgContainer">
            <img
              src={us.profilePicture}
              alt=""
              className="rightbarProfileImg"
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">{us.fullname}</span>
        </li>
      ))}

      {/* Cửa sổ chat chính */}
      {openChat && (
        <ChatWindown
          onClose={closeChat}
          openMini={MiniMum}
          idFriend={idFriend}
        />
      )}

      {/* Mini chat khi thu nhỏ */}
      {showMini && (
        <MiniChat
          onCloseMini={OncloseMini}
          openBoxChat={() => OpenChat(idFriend)}
          idFriend={idFriend}
        />
      )}
    </ul>
  );
}
