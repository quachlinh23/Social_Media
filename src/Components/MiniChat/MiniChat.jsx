import { Users } from '../../Data';
import './MiniChat.css'
import { Close } from '@mui/icons-material'

export default function MiniChat({openBoxChat, onCloseMini, idFriend}) {
    
    // Mở khung chat chính khi click vào avatar
    function HandleOpen(){
        openBoxChat();
    }

    // Lấy thông tin friend theo id
    const Friend = Users.find((f) => f.id === idFriend);

    return (
        <div className="minichat" title={`Mở đoạn chat với ${Friend.fullname}`}>
            {/* Avatar mini */}
            <img 
                src={Friend.profilePicture}
                alt=""
                className="miniChat"
                onClick={HandleOpen}
            />
            {/* Chấm trạng thái online */}
            <div className="miniChatActive"></div>
            {/* Icon đóng mini chat */}
            <Close
                className="miniChatIcon"    
                style={{fontSize:"15px"}}
                onClick={(e) =>{
                    onCloseMini();
                    e.stopPropagation(); // ngăn sự kiện click lan ra avatar
                }}
            />
        </div>
    )
}