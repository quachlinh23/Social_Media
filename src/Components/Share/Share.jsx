import './Share.css'
import { PermMedia,EmojiEmotions, Label } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PostAdd from '../PostAdd/PostAdd';
import { useAuth } from '../context/AuthContext';

export default function Share() {
    const {user} = useAuth(); // Lấy thông tin user từ context đăng nhập
    const currentUser = user;
    const [openAddPost, setOpenAddPost] = useState(false);

    // Hàm xử lý mở/đóng modal thêm bài viết
    function handleOpenAddPost(){
        setOpenAddPost(!openAddPost);
    }
    
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    {/*Link đến trang cá nhân*/}
                    <Link to={`/profile/${user.id}`}>
                        <img 
                            className="shareProfileImg" 
                            src={user.profilePicture} 
                            alt="" 
                        />
                    </Link>
                    <input 
                        placeholder={`${user.fullname} ơi, bạn đang nghĩ gì thế?`} 
                        className="shareInput"
                        onClick={handleOpenAddPost}
                    />
                </div>
                {/*Đường ngăn cách*/}
                <hr className="shareHr"/>
                {/*Phần bên dưới*/}
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption"
                            onClick={handleOpenAddPost}
                        >
                            <PermMedia 
                                htmlColor='tomato' 
                                className="shareIcon"
                            />
                            <span className="shareOptionText">
                                Ảnh/Video
                            </span>
                        </div>
                        <div className="shareOption"
                            onClick={handleOpenAddPost}
                        >
                            <EmojiEmotions 
                                htmlColor='orange' 
                                className="shareIcon"
                            />
                            <span className="shareOptionText">
                                Cảm xúc
                            </span>
                        </div>
                        <div className="shareOption"
                            onClick={handleOpenAddPost}
                        >
                            <Label 
                                htmlColor='green' 
                                className="shareIcon"
                            />
                            <span className="shareOptionText">
                                Gắn thẻ
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/*Model thêm bài viết mới*/}
            {openAddPost && 
                <PostAdd 
                    handleClose={handleOpenAddPost}
                    user={currentUser}
                />
            }
        </div>
    )
}