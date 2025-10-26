import { InsertEmoticonSharp, Close, Photo, MoreVert, Person, LocationOnSharp, GifSharp } from "@mui/icons-material";
import './PostAdd.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

export default function PostAdd({handleClose, user}) {
    // state lưu nội dung textarea
    const [content, setContain] = useState("");
    
    // Hàm đóng popup
    function closeAdd(){
        handleClose();
    }

    // Hàm xử lý khi click "Đăng"
    function handleAdd(){
        if (content){
            handleClose();
            setContain("");
        }
    }

    // useEffect để chặn thao tác cuộn trang phía sau popup
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden'; // tắt scroll
        return () => {
        document.body.style.overflow = originalStyle; // reset khi unmount
        };
    }, []);

    return (
        <div className="PostAddWrapper">
            <div className="PostAddContain">
                {/* header popup */}
                <div className="PostAddContainTop">
                    <span className="PostAddContainTopTittle">
                        Tạo bài viết
                    </span>
                    <Close 
                        className="btnClose"
                        onClick = {closeAdd}
                    />
                </div>
                {/* nội dung trung tâm */}
                <div className="PostAddContainCenter">
                    <div className="PostAddContainInfo">
                        <Link to={`/profile/${user.id}`}>
                            <img 
                                src={user.profilePicture}
                                alt="" 
                                className="PostAddContainInfoImg" 
                            />
                        </Link>
                        <div className="PostAddContainInfo">{user.fullname}</div>
                    </div>
                    <textarea
                        value={content}
                        onChange={(e) => setContain(e.target.value)}
                        name="" 
                        id="" 
                        className="PostAddContainText"
                        placeholder={`${user.fullname} ơi, bạn đang nghĩ gì thế?`}
                    />
                    {/* Các tùy chọn thêm vào bài viết */}
                    <div className="optionPost">
                        <span className="optionPostTitle">Thêm vào bài viết của bạn</span>
                        <Photo 
                            className="optionPostIcon"
                            style={{fontSize:"30px", color:"#45bd62"}}
                            titleAccess="Ảnh/ Video"
                        />
                        <Person 
                            className="optionPostIcon"
                            style={{fontSize:"30px", color:"#1877f2"}}
                            titleAccess="Gắn thẻ người khác"
                        />
                        <InsertEmoticonSharp 
                            className="optionPostIcon"
                            style={{fontSize:"30px",color:"#fad57d"}}
                            titleAccess="Cảm xúc/ Hoạt động"
                        />
                        <LocationOnSharp 
                            className="optionPostIcon"
                            style={{fontSize:"30px", color:"#f5543e"}}
                            titleAccess="Check in"
                        />
                        <GifSharp 
                            className="optionPostIcon"
                            style={{fontSize:"30px", color:"#30bda9"}}
                            titleAccess="Gif"
                        />
                        <MoreVert 
                            className="optionPostIcon"
                            style={{fontSize:"30px", transform:"rotate(90deg)"}}
                            titleAccess="Xem thêm"
                        />
                    </div>
                </div>
                {/* Footer: nút Đăng */}
                <div className="PostAddContainBottom">
                    <button 
                        className="BtnaddPost"
                        onClick={handleAdd}
                        disabled={!content.trim()}
                    >
                            Đăng
                    </button>
                </div>
            </div>
        </div>
    )
}