import { Users } from '../../Data';
import './MiniChat.css'
import { Close } from '@mui/icons-material'

export default function MiniChat({openBoxChat, onCloseMini, idFriend}) {
    function HandleOpen(){
        openBoxChat();
    }

    const Friend = Users.find((f) => f.id === idFriend);
    return (
        <div className="minichat">
            <img 
                src={Friend.profilePicture}
                alt=""
                className="miniChat"
                onClick={HandleOpen}
            />
            <div className="miniChatActive"></div>
            <Close
                className="miniChatIcon"    
                style={{fontSize:"15px"}}
                onClick={(e) =>{
                    onCloseMini();
                    e.stopPropagation();
                }}
            />
        </div>
    )
}
