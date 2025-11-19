import {
  People,
  Groups,
  History,
  TurnedIn,
  InsertInvitation,
  ExpandMore,
  ExpandLess,
  Newspaper,
  VideogameAsset,
  Message,
  Cake,
  MovieCreation,
} from "@mui/icons-material";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth(); // lấy user hiện tại từ context
  const [extend, setExtend] = useState(false);

  // hàm xử lý khi click vào “Xem thêm” hoặc “Ẩn bớt”
  function handleExtend() {
    setExtend(!extend);
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {/* mục đầu tiên: hiển thị tên và ảnh người dùng, click vào sẽ dẫn đến trang cá nhân */}
          <Link to={`/profile/${user.id}`} className="noLinkStyle">
            <li className="sidebarListItem">
              <div className="avatar">
                <img className="avatarImg" src={user.profilePicture} alt="" />
              </div>
              <span className="sidebarListItemText">{user.fullname}</span>
            </li>
          </Link>
          {/* các mục chức năng chính */}
          <li className="sidebarListItem">
            <People className="sidebarIcon" style={{ color: "#4CAF50" }} />
            <span className="sidebarListItemText">Bạn bè</span>
          </li>
          <li className="sidebarListItem">
            <Groups className="sidebarIcon" style={{ color: "#42A5F5" }} />
            <span className="sidebarListItemText">Nhóm</span>
          </li>
          <li className="sidebarListItem">
            <InsertInvitation
              className="sidebarIcon"
              style={{ color: "#FF9800" }}
            />
            <span className="sidebarListItemText">Sự kiện</span>
          </li>
          <li className="sidebarListItem">
            <History className="sidebarIcon" style={{ color: "#AB47BC" }} />
            <span className="sidebarListItemText">Kỷ niệm</span>
          </li>
          <li className="sidebarListItem">
            <TurnedIn className="sidebarIcon" style={{ color: "#FF6F61" }} />
            <span className="sidebarListItemText">Đã lưu</span>
          </li>
          {/* nếu extend = true thì hiển thị thêm danh sách mở rộng */}
          {extend && (
            <>
              <li className="sidebarListItem">
                <Newspaper
                  className="sidebarIcon"
                  style={{ color: "#009688" }}
                />
                <span className="sidebarListItemText">Bảng feed</span>
              </li>

              <li className="sidebarListItem">
                <VideogameAsset
                  className="sidebarIcon"
                  style={{ color: "#CDDC39" }}
                />
                <span className="sidebarListItemText">Chơi game</span>
              </li>
              <li className="sidebarListItem">
                <Message className="sidebarIcon" style={{ color: "#1976D2" }} />
                <span className="sidebarListItemText">Messenger</span>
              </li>
              <li className="sidebarListItem">
                <Cake className="sidebarIcon" style={{ color: "#E91E63" }} />
                <span className="sidebarListItemText">Sinh nhật</span>
              </li>

              <li className="sidebarListItem">
                <MovieCreation
                  className="sidebarIcon"
                  style={{ color: "#FF5722" }}
                />
                <span className="sidebarListItemText">Reels</span>
              </li>
            </>
          )}
          {/* nút xem thêm / ẩn bớt */}
          <li className="sidebarListItem" onClick={handleExtend}>
            {!extend ? (
              <ExpandMore className="sidebarIcon" />
            ) : (
              <ExpandLess className="sidebarIcon" />
            )}
            <span className="sidebarListItemText">
              {!extend ? "Xem thêm" : "Ẩn bớt"}
            </span>
          </li>
          <hr className="sidebarHr" />

          <span className="TitleSidebar">Lối tắt của bạn</span>
          <li className="sidebarListItem">SGU Confessions - Đại Học Sài Gòn</li>

          <li className="sidebarListItem">Candy Crush Soda Saga</li>

          <li className="sidebarListItem">Blossom Blast Saga</li>
        </ul>
        <hr />
        <div class="info-group minimal">
          Nhóm 8 - CNLTHĐ - 2025 -
          <span class="members">@linh @đạt @luận @cảnh</span>
        </div>
      </div>
    </div>
  );
}
