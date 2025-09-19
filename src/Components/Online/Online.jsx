import { Users } from '../../Data'
import { useState } from 'react';
import Chat from '../Chat/Chat'
import './Online.css'
import MiniChat from '../MiniChat/MiniChat';

export default function Online( {idUs} ) {
    const currentUser = Users.find((usi) => usi.id === Number(idUs));
    const friendIds = currentUser?.friends || [];

    const friendList = Users.filter(
        (friendList) => friendIds.includes(Number(friendList.id))
    )

    const [openChat, setOpenChat] = useState(false);
    const [showMini, setShowMini] = useState(false);
    const [idFriend, setIdFriend] = useState();

    function OpenChat(idFriendChat){
        setOpenChat(!openChat);
        setShowMini(false);
        setIdFriend(idFriendChat)
    }

    function closeChat(){
        setOpenChat(false);
    }

    function MiniMum(){
        setOpenChat(false);
        setShowMini(true);
    }

    function OncloseMini(){
        setShowMini(false);
    }
    
    return (
        <ul className="rightbarFriendList">
            {friendList.map((us) => (
                <li 
                    className="rightbarFriend" 
                    key={us.id}
                    onClick={()=>{OpenChat(us.id)}}
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
            {openChat && 
                <Chat 
                    onClose={closeChat}
                    openMini={MiniMum}
                    idFriend={idFriend}
                />
            }
            {showMini &&
                <MiniChat
                    onCloseMini={OncloseMini}
                    openBoxChat={()=>
                        OpenChat(idFriend)
                    }
                    idFriend={idFriend}
                />
            }
        </ul>
    )
}