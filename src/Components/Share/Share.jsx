import './Share.css'
import { PermMedia,EmojiEmotions, Label } from '@mui/icons-material'
import { Users } from '../../Data'
import { Link } from 'react-router-dom';

export default function Share() {
    const userId = localStorage.getItem("UserId");
    const currentUser = Users.find((us) => us.id === Number(userId));
    
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <Link to={`/profile/${userId}`}>
                        <img 
                            className="shareProfileImg" 
                            src={currentUser.profilePicture} 
                            alt="" 
                        />
                    </Link>
                    <input 
                        placeholder={`${currentUser.fullname}, bạn đang nghĩ gì thế?`} 
                        className="shareInput"
                    />
                    <button className="shareButton">
                        Đăng
                    </button>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className="shareIcon"/>
                            <span className="shareOptionText">
                                Ảnh/Video
                            </span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='orange' className="shareIcon"/>
                            <span className="shareOptionText">
                                Cảm xúc
                            </span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='green' className="shareIcon"/>
                            <span className="shareOptionText">
                                Gắn thẻ
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
