import "./NotificationFriendRequest.css";

export default function NotificationFriendRequest() {
  return (
    <div className="FriendDropDown">
      {/* Tiêu đề dropdown */}
      <div className="FriendDropDownTittle">Lời mời kết bạn</div>
      {/* Danh sách lời mời */}
      <ul className="FriendDropDownList">
        {/* Một lời mời */}
        <li className="FriendDropDownItem">
          {/* Avatar người gửi lời mời */}
          <img
            src="/assets/Person/Person1.jpg"
            alt="user"
            className="FriendDropDownItemImg"
          />
          {/* Nội dung lời mời */}
          <div className="FriendDropDownItemContent">
            <div className="FriendDropDownItemName">Quách</div>
            <div className="BtnsOption">
              <button className="btnAccept">Xác nhận</button>
              <button className="btnCancle">Xóa</button>
            </div>
          </div>
        </li>
        <li className="FriendDropDownItem">
          {/* Avatar người gửi lời mời */}
          <img
            src="/assets/Person/Person2.jpg"
            alt="user"
            className="FriendDropDownItemImg"
          />
          {/* Nội dung lời mời */}
          <div className="FriendDropDownItemContent">
            <div className="FriendDropDownItemName">Luận</div>
            <div className="BtnsOption">
              <button className="btnAccept">Xác nhận</button>
              <button className="btnCancle">Xóa</button>
            </div>
          </div>
        </li>
        <li className="FriendDropDownItem">
          {/* Avatar người gửi lời mời */}
          <img
            src="/assets/Person/Person3.jpg"
            alt="user"
            className="FriendDropDownItemImg"
          />
          {/* Nội dung lời mời */}
          <div className="FriendDropDownItemContent">
            <div className="FriendDropDownItemName">Cảnh</div>
            <div className="BtnsOption">
              <button className="btnAccept">Xác nhận</button>
              <button className="btnCancle">Xóa</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
