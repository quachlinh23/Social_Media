import './ChatWindown.css'
import {Close, Remove, Mic, Photo, Gif} from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { Users, Messages} from '../../Data'
import { useState } from 'react';

export default function ChatWindown({ onClose, openMini, idFriend}) {
    function HandleClose(){
        onClose();
    }

    function HandleMinimun(){
        openMini();
    }

    const InfoFriend = Users.find((us) => us.id === idFriend)
    const CurrentUser = Number(localStorage.getItem("UserId"));
    const [messageText, setMessageText] = useState("");
    const [messageDisplay, setMessageDisplay] = useState([]);

    function handleChat(){
        if (messageText !== ""){
            setMessageDisplay(pre=> [
                ...pre, {text: messageText}
            ]);
            setMessageText("");
        }
    }

    function handleKey(e) {
        if (e.key==="Enter"){
            handleChat();
        }
    }
    return (
        <div className="chatWrapper">
            <div className="chatTop">
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
            <div className="chatContainer">
                {Messages.filter(ms => 
                    (ms.idSend === CurrentUser && ms.idReceive === InfoFriend.id) ||
                    (ms.idSend === InfoFriend.id && ms.idReceive === CurrentUser)
                ).map(ms => (
                    ms.idSend === CurrentUser ? 
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
                {messageDisplay.map((ms) => (
                    <div className="chatSend">
                        <span className="chatSendText">
                            {ms.text}
                        </span>
                    </div>
                ))}
            </div>
            <div className="chatBottom">
                <Mic className="IconChatBottom"/>
                <Photo className="IconChatBottom"/>
                <Gif className="IconChatBottom"/>
                <input 
                    type="text" 
                    placeholder="Nhập tin nhắn..." 
                    className="chatInput"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={handleKey}
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