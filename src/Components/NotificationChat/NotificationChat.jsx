import "./NotificationChat.css";

export default function ChatDropDown() {
    return (
        <div className="ChatDropDown">
            <div className="ChatDropDownTittle">
                Đoạn chat
            </div>
            <ul className="ChatDropDownList">
                <li className="ChatDropDownItem">
                    <img
                        src="/assets/Person/Person1.jpg"
                        alt=""
                        className="ChatDropDownItemImg"
                    />
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