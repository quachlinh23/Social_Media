import "./NotificationChat.css";

export default function ChatDropDown() {
    return (
        <div className="ChatDropDown">
            {/* Tiêu đề dropdown */}
            <div className="ChatDropDownTittle">
                Đoạn chat
            </div>
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
            </ul>
        </div>
    );
}