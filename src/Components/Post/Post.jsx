import { MoreVert, ThumbUp, Comment, Share, Close } from '@mui/icons-material'
import './Post.css'
import Postdetail from '../PostDetail/PostDetail'
import React, { useMemo, useState} from 'react'
import {Users, Comments} from '../../Data'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// export default 
function Post({post}) {
    const {user} = useAuth();
    // State like và hiển thị chi tiết
    const [isLike, setisLike] = useState(false);
    const [like, setLike] = useState(post.like);
    const [detailPost, setDetailPost] = useState(false);

    //Thông tin của user là chủ bài post
    const PostUser = Users.find((u)=>(u.id === post.userId));
    
    //Đường dẫn chuyển trang
    const path = Number(user.id) === post.userId ? "profile" : "visitProfile";

    //Dùng usememo để lọc danh sách comment của một bài post
    const ListComment = useMemo(() => 
        Comments.filter((comment) => comment.postId === post.id),
        [post.id]
    );
    
    // Xử lý like
    function LikeHandle() {
        setLike(isLike ? like - 1 : like + 1);
        setisLike(!isLike);
    }

    // Toggle hiển thị chi tiết post
    function HandleDetailPost(){
        setDetailPost(!detailPost)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                {/* Header bài post */}
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/${path}/${PostUser.id}`}>
                            <img 
                                className="postProfileImg" 
                                src={PostUser.profilePicture} 
                                alt=""
                                loading="lazy"
                            />
                        </Link>
                        <div className="postTopLeftContent">
                            <Link to={`/${path}/${PostUser.id}`} className="noLinkStyle">
                                <span className="postUserName">{PostUser.fullname}</span>
                            </Link>
                            <br />
                            <span className="postDate">{post.date}</span>
                        </div>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="MoreVertIcon" style={{ transform: 'rotate(-90deg)' }}/>
                        <Close className="CloseIcon" />
                    </div>
                </div>
                
                {/* Nội dung bài post */}
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img 
                        className="postImg" 
                        src={post.photo} 
                        alt=""
                        loading="lazy"
                    />
                    <hr className="postHr"/>
                </div>

                {/* Footer bài post */}
                <div className="postBottom">
                    <div className="postBottomTop">
                        <div className="postBottomTopLeft">
                            <span className="postLikeCounter">{like} Lượt thích</span>
                        </div>
                        <div className="postBottomTopRight">
                            <span 
                                className="postCommentText"
                                onClick={HandleDetailPost}
                            >
                                {ListComment.length} Bình luận
                            </span>
                            <span className="postCommentText">{post.share} Chia sẻ</span>
                        </div>
                    </div>
                    <hr className="postHr"/>
                    <div className="postBottomBottom">
                        <button 
                            className="postButton" 
                            onClick={LikeHandle}
                        >
                            <ThumbUp style={{ 
                                marginRight: "2px",
                                color : isLike ? "blue" : ""
                            }} /> Thích
                        </button>

                        <button 
                            className="postButton"
                            onClick={HandleDetailPost}
                        >
                            <Comment style={{ marginRight: "5px" }} /> Bình luận
                        </button>

                        <button className="postButton">
                            <Share style={{ marginRight: "5px" }} /> Chia sẻ
                        </button>
                    </div>
                </div>
            </div>

            {/* Hiển thị chi tiết post */}
            {detailPost && 
                <Postdetail 
                    OpenDetail={HandleDetailPost}
                    idPost = {post.id}
                    isLikeisLike={isLike}
                    LikeHandle={LikeHandle}
                    likeCount = {like}
                />
            }
        </div>
    )
}
export default React.memo(Post);