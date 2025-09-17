import {Users} from '../../Data'
import './Online.css'

export default function Online() {
    return (
        <ul className="rightbarFriendList">
            {Users.map((us) => (
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img 
                            src={us.profilePicture} 
                            alt="" 
                            className="rightbarProfileImg" 
                        />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">{us.username}</span>
                </li>
            ))}
        </ul>
    )
}