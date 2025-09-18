import './MiniChat.css'
import { Close } from '@mui/icons-material'

export default function MiniChat({openBoxChat, onCloseMini}) {
    function HandleOpen(){
        openBoxChat();
    }
    return (
        <div className="minichat">
            <img 
                src="/assets/Person/Person1.jpg" 
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
