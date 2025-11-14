import "./NotificationChat.css";

export default function ChatDropDown() {
  return (
    <div className="ChatDropDown">
      {/* Tiêu đề dropdown */}
      <div className="ChatDropDownTittle">Đoạn chat</div>
      {/* Danh sách các đoạn chat */}
      <ul className="ChatDropDownList">
        {/* Một đoạn chat */}
        <li className="ChatDropDownItem">
          {/* Avatar người chat */}
          <img
            src="/assets/Person/Person1.jpg"
            alt=""
            className="ChatDropDownItemImg"
          />
          {/* Nội dung đoạn chat */}
          <div className="ChatDropDownItemContent">
            <span className="ChatDropDownItemName">Quách</span>
            <span className="ChatDropDownItemText">
              Bạn: Hôm nay đi đâu aaaaaaaaaaaaa?
            </span>
          </div>
        </li>
        <li className="ChatDropDownItem">
          {/* Avatar người chat */}
          <img
            src="/assets/Person/Person2.jpg"
            alt=""
            className="ChatDropDownItemImg"
          />
          {/* Nội dung đoạn chat */}
          <div className="ChatDropDownItemContent">
            <span className="ChatDropDownItemName">Đạt</span>
            <span className="ChatDropDownItemText">Bạn: 10 điểm nha</span>
          </div>
        </li>
        <li className="ChatDropDownItem">
          {/* Avatar người chat */}
          <img
            src="/assets/Person/Person3.jpg"
            alt=""
            className="ChatDropDownItemImg"
          />
          {/* Nội dung đoạn chat */}
          <div className="ChatDropDownItemContent">
            <span className="ChatDropDownItemName">Luận</span>
            <span className="ChatDropDownItemText">Bạn: Anh ơi cố lên</span>
          </div>
        </li>
        <li className="ChatDropDownItem">
          {/* Avatar người chat */}
          <img
            src="/assets/Person/Person2.jpg"
            alt=""
            className="ChatDropDownItemImg"
          />
          {/* Nội dung đoạn chat */}
          <div className="ChatDropDownItemContent">
            <span className="ChatDropDownItemName">Cảnh</span>
            <span className="ChatDropDownItemText">
              Bạn: 12 12 anh ơi cố lên
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
