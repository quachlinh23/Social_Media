import "./NotificationChat.css";

export default function ChatDropDown() {
    return (
        <div className="ChatDropDown">
            <div className="ChatDropDownTittle">
                Đoạn chat
            </div>
            <ul className="ChatDropDownList">
                <li className="ChatDropDownItem">
                <div className="UserImgWrapper">
                    <img
                    src="/assets/Person/Person1.jpg"
                    alt=""
                    className="UserImg"
                    />
                </div>
                <div className="userContent">
                    <span className="userContentName">Quách</span>
                    <br />
                    <span className="userContentText">
                    Bạn: Hôm nay đi đâu aaaaaaaaaaaaa?
                    </span>
                </div>
                </li>
            </ul>
        </div>
    );
}