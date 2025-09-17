import { MoreVert, ThumbUp, Comment, Share } from '@mui/icons-material'
import './Post.css'
import { useState } from 'react'
import {Users} from '../../Data'
import { Link } from 'react-router-dom'

export default function Post({post}) {
    const [isLike, setisLike] = useState(false);
    const [like, setLike] = useState(post.like);
    const user = Users.find((u)=>(u.id === post.userId));
    const userId = localStorage.getItem("UserId");
    const path = Number(userId) === user.id ? "profile" : "visitProfile";

    function LikeHandle() {
        setLike(isLike ? like - 1 : like + 1);
        setisLike(!isLike);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/${path}/${user.id}`}>
                            <img 
                                className="postProfileImg" 
                                src={user.profilePicture} alt="" 
                            />
                        </Link>
                        <div className="postTopLeftContent">
                            <Link to={`/${path}/${user.id}`} className="noLinkStyle">
                                <span className="postUserName">{user.username}</span>
                            </Link>
                            <br />
                            <span className="postDate">{post.date}</span>
                        </div>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />  
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
                            <span className="postLikeCounter">{like} people like it</span>
                        </div>
                        <div className="postBottomTopRight">
                            <span className="postCommentText">{post.comment} comments</span>
                            <span className="postShareText">{post.share} share</span>
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
                            }} /> Like
                        </button>

                        <button className="postButton">
                            <Comment style={{ marginRight: "5px" }} /> Comment
                        </button>

                        <button className="postButton">
                            <Share style={{ marginRight: "5px" }} /> Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}