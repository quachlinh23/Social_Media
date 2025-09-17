import { MoreVert, ThumbUp, Comment, Share, Close } from '@mui/icons-material'
import './Post.css'
import { useState } from 'react'
import {Users} from '../../Data'
import { Link } from 'react-router-dom'

export default function Post({post}) {
    const [isLike, setisLike] = useState(false);
    const [like, setLike] = useState(post.like);

    const currenUser = Users.find((u)=>(u.id === post.userId));
    const userId = localStorage.getItem("UserId");
    const path = Number(userId) === currenUser.id ? "profile" : "visitProfile";

    function LikeHandle() {
        setLike(isLike ? like - 1 : like + 1);
        setisLike(!isLike);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/${path}/${currenUser.id}`}>
                            <img 
                                className="postProfileImg" 
                                src={currenUser.profilePicture} alt="" 
                            />
                        </Link>
                        <div className="postTopLeftContent">
                            <Link to={`/${path}/${currenUser.id}`} className="noLinkStyle">
                                <span className="postUserName">{currenUser.fullname}</span>
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
                
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img 
                        className="postImg" 
                        src={post.photo} alt="" 
                    />
                    <hr className="postHr"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomTop">
                        <div className="postBottomTopLeft">
                            <span className="postLikeCounter">{like} Lượt thích</span>
                        </div>
                        <div className="postBottomTopRight">
                            <span className="postCommentText">{post.comment} Bình luận</span>
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

                        <button className="postButton">
                            <Comment style={{ marginRight: "5px" }} /> Bình luận
                        </button>

                        <button className="postButton">
                            <Share style={{ marginRight: "5px" }} /> Chia sẻ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}