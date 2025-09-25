import "./NotificationFriendRequest.css";

export default function NotificationFriendRequest() {
    return (
        <div className="FriendDropDown">
            <div className="FriendDropDownTittle">
                Lời mời kết bạn
            </div>
            <ul className="FriendDropDownList">
                <li className="FriendDropDownItem">
                    <img
                        src="/assets/Person/Person1.jpg"
                        alt="user"
                        className="FriendDropDownItemImg"
                    />
                    <div className="FriendDropDownItemContent">
                        <div className="FriendDropDownItemName">Quách</div>
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