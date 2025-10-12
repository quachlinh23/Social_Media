import './Postdetail.css';
import { useEffect, useRef, useState } from "react";
import { Close, MoreVert, Comment, Share, ThumbUp, Send } from '@mui/icons-material';
import { Posts, Users, Comments } from '../../Data';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Postdetail({OpenDetail, idPost,LikeHandle, isLikeisLike, likeCount}) {
    const {user} = useAuth();

    //Danh sách comment của một bài viết
    const ListComment = Comments.filter((comment) => comment.postId === idPost);
    //Chi tiết của một bài viết
    const PostDetail = Posts.find((pos) => pos.id === idPost );
    //Thông tin user của bài viết
    const PostUser = Users.find((us) => us.id === Number(PostDetail.userId));
    //Đường dẫn truy cập trang

    const path = user.id === PostDetail.userId ? "profile" : "visitProfile";
    const [addComment, setAddComment] = useState([]);
    const [commentText, setCommentText] = useState("");
    const [countComment, setCountComment] = useState(ListComment.length);

    // Chặn thao tác bên ngoài
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => {
        document.body.style.overflow = originalStyle;
        };
    }, []);

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    function closeDetail(){
        OpenDetail();
    }

    function handleComment(){
        if (commentText !== ""){
            setAddComment(pre=> [
                ...pre, {
                        id: PostDetail.length + 1,
                        postId: PostDetail.id,
                        userid: user.id,
                        text: commentText
                    }
            ]);
            setCommentText("");
            setCountComment(countComment+1)
        }
    }
    
    function handleLike(){
        LikeHandle();
    }

    const handleKey = (e) => {
        if(e.key === "Enter")
            handleComment()
    };
    return (
        <div className="postdetail">
            <div className="postdetailWrapper">
                <div className="postdetailTop">
                    Bài viết của {PostUser.fullname}
                    <Close 
                        className="btnClose"
                        onClick={closeDetail}
                    />
                </div>

                <div className="postdetailCenter">
                    <div className="postdetailCenterTop">
                        <div className="postdetailCenterTopLeft">
                            <Link to={`/${path}/${user.id}`}>
                                <img 
                                    className="postdetailProfileImg" 
                                    src={PostUser.profilePicture} 
                                    alt="" 
                                />
                            </Link>
                            
                            <div className="postdetailLeftContent">
                                <Link to={`/${path}/${user.id}`} className="noLinkStyle">
                                    <span className="postdetailUserName">{PostUser.fullname}</span><br />
                                </Link>
                                <span className="postdetailDate">{PostDetail.date}</span>
                            </div>
                        </div>
                        <div className="postdetailTopRight">
                            <MoreVert className="MoreVertIcon" style={{ transform: 'rotate(-90deg)' }} />
                        </div>
                    </div>

                    <span className="postText">{PostDetail.desc}</span>
                    <img 
                        className="postImg" 
                        src= {PostDetail.photo} 
                        alt="" 
                    />
                    <hr className="postdetailHr" />

                    <div className="postdetailBottom">
                        <div className="postdetailBottomTop">
                            <div className="postdetailBottomTopLeft">
                                <span className="postdetailLikeCounter">{likeCount} Lượt thích</span>
                            </div>
                            <div className="postdetailBottomTopRight">
                                <span 
                                    className="postdetailCommentText"
                                    onClick={handleClick}
                                >
                                    {countComment} Bình luận
                                </span>
                                <span className="postdetailCommentText">{PostDetail.share} Chia sẻ</span>
                            </div>
                        </div>
                        <hr className="postdetailHr" />
                        <div className="postdetailBottomBottom">
                            <button className="postdetailButton"
                                onClick={handleLike}
                            >
                                <ThumbUp style={{color: isLikeisLike ? "blue" : ""}}/> Thích
                            </button>
                            <button 
                                className="postdetailButton"
                                onClick={handleClick}
                            >
                                <Comment /> Bình luận
                            </button>
                            <button className="postdetailButton"><Share /> Chia sẻ</button>
                        </div>
                        <hr className="postdetailHr" />
                    </div>
                    
                    <div className="postdetailListComment">
                        {
                            ListComment.length > 0 ? (
                                ListComment.map((item) => {
                                    const UserInfo = Users.find((user) => user.id === item.userId);
                                    return (
                                        <div className="CommentItem" key={item.id}>
                                            <Link 
                                                to={`/${path}/${UserInfo.id}`} 
                                                className="noLinkStyle"
                                                onClick={closeDetail}
                                            >
                                                <img 
                                                    className="CommentItemProfileImg" 
                                                    src={UserInfo.profilePicture}
                                                    alt=""
                                                />
                                            </Link>
                                            <div className="CommentItemContain">
                                                <Link 
                                                    to={`/${path}/${UserInfo.id}`} 
                                                    className="noLinkStyle"
                                                    onClick={closeDetail}
                                                >
                                                    <span className="CommentItemUsername">
                                                        {UserInfo.fullname}
                                                    </span>
                                                </Link>
                                                
                                                <span className="CommentItemText">
                                                    {item.text}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                addComment.length <= 0 && (
                                    <div className="NoCommentItem">
                                        <img 
                                            src="/assets/Icons/noComment.png" 
                                            alt="" 
                                            className="noComentImg" />
                                        <span className="noCommentTitle">Chưa có bình luận nào</span>
                                        <span className="noComment">Hãy là người bình luận đầu tiên.</span>
                                    </div>
                                )
                            )
                        }
                        {addComment.map((item) => {
                            const user = Users.find(u => u.id === item.userid);
                            return (
                                <div className="CommentItem" key={item.id}>
                                    <Link to={`/${path}/${user.id}`} className="noLinkStyle" onClick={closeDetail}>
                                        <img className="CommentItemProfileImg" src={user.profilePicture} alt="" />
                                    </Link>
                                    <div className="CommentItemContain">
                                        <Link to={`/${path}/${user.id}`} className="noLinkStyle" onClick={closeDetail}>
                                            <span className="CommentItemUsername">{user.fullname}</span>
                                        </Link>
                                        <span className="CommentItemText">{item.text}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className="postDetailBottom">
                    <Link to={`/${path}/${user.id}`}>
                        <img 
                            src={user.profilePicture}  
                            alt="" 
                            className="postDetailUserImg" 
                        />
                    </Link>
                    <input 
                        type="text" 
                        className="InputText" 
                        placeholder="Viết bình luận..."
                        value={commentText}
                        onChange={(e)=>setCommentText(e.target.value)}
                        ref={inputRef}
                        onKeyDown={handleKey}
                    />
                    <Send
                        className="iconSend"
                        titleAccess='Bình luận'
                        onClick={handleComment}
                    />
                </div>
            </div>
        </div>
    );
}