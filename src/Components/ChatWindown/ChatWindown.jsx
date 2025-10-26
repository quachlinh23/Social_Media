import './ChatWindown.css'
import {Close, Remove, Mic, Photo, Gif} from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { Users, Messages} from '../../Data'
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function ChatWindown({ onClose, openMini, idFriend}) {
    const {user} = useAuth(); // Lấy thông tin user hiện tại từ context
    const InfoFriend = Users.find((us) => us.id === idFriend) // Lấy thông tin người nhắn tin từ danh sách người dùng
    const [messageText, setMessageText] = useState(""); // state lưu text đang nhập
    const [messageDisplay, setMessageDisplay] = useState([]); // state lưu tin nhắn mới gửi

    //Hàm đóng cửa sổ chat
    function HandleClose(){
        onClose();
    }

    //Hàm thu nhỏ cửa sổ chat
    function HandleMinimun(){
        openMini();
    }

    //Hàm gửi tin nhắn thêm tin nhắn mới vào messageDisplay
    function handleChat(){
        if (messageText !== ""){
            setMessageDisplay(pre=> [
                ...pre, {text: messageText}
            ]);
            setMessageText("");
        }
    }

    //Hàm bắt sự kiện nhấn phím enter để gửi tin nhắn
    function handleKey(e) {
        if (e.key==="Enter"){
            handleChat();
        }
    }

    return (
        <div className="chatWrapper">
            <div className="chatTop">
                {/* Phần header chat */}
                <Link to={`/visitProfile/${InfoFriend.id}`}>
                    <img 
                        src={InfoFriend.profilePicture}
                        alt=""
                        className="InfoImg"
                        title={InfoFriend.fullname}
                    />
                </Link>
                <div className="active"></div>
                <div className="Info">
                    <span className="InfoName">
                        {InfoFriend.fullname}
                    </span>
                    <br />
                    <span className="activeTime">
                        Đang hoạt động
                    </span>
                </div>
                <Remove 
                    className="IconRemove"
                    onClick={HandleMinimun}
                    titleAccess="Thu nhỏ đoạn chat"
                />
                <Close 
                    className="IconClose"
                    onClick={HandleClose}
                    titleAccess="Đóng đoạn chat"
                />
            </div>
            {/* Phần hiển thị tin nhắn */}
            <div className="chatContainer">
                {/* Lọc và hiển thị tin nhắn cũ giữa user và friend */}
                {Messages.filter(ms => 
                    (ms.idSend === user.id && ms.idReceive === InfoFriend.id) ||
                    (ms.idSend === InfoFriend.id && ms.idReceive === user.id)
                ).map(ms => (
                    ms.idSend === user.id ? 
                    (
                        <div className="chatSend" key={ms.id}>
                            <span className="chatSendText">
                                {ms.text}
                            </span>
                        </div>
                    ) :(
                        <div className="chatReceive" key={ms.id}>
                            <Link to={`/visitProfile/${InfoFriend.id}`}>
                                <img 
                                    src={InfoFriend.profilePicture} 
                                    alt=""
                                    className="chatReceiveImg"
                                />
                            </Link>
                            <span className="chatReceiveText">
                                {ms.text}
                            </span>
                        </div>
                    )
                ))}
                {/* Hiển thị tin nhắn mới gửi */}
                {messageDisplay.map((ms) => (
                    <div className="chatSend">
                        <span className="chatSendText">
                            {ms.text}
                        </span>
                    </div>
                ))}
            </div>
            {/* Phần nhập tin nhắn */}
            <div className="chatBottom">
                <Mic className="IconChatBottom"/>
                <Photo className="IconChatBottom"/>
                <Gif className="IconChatBottom"/>
                <input 
                    type="text" 
                    placeholder="Nhập tin nhắn..." 
                    className="chatInput"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)} //cập nhật state khi gõ
                    onKeyDown={handleKey} //Sự kiện nhắn phím enter
                />
                <button 
                    className="chatSendBtn"
                    onClick={handleChat}
                >
                        Gửi
                </button>
            </div>
        </div>
    )
}