import { Users } from '../../Data'
import './Online.css'

export default function Online( {idUs} ) {
    const currentUser = Users.find((usi) => usi.id === Number(idUs));
    const friendIds = currentUser?.friends || [];

    const friendList = Users.filter(
        (friendList) => friendIds.includes(Number(friendList.id))
    )

    
    return (
        <ul className="rightbarFriendList">
            {friendList.map((us) => (
                <li className="rightbarFriend" key={us.id}>
                    <div className="rightbarProfileImgContainer">
                        <img 
                            src={us.profilePicture} 
                            alt="" 
                            className="rightbarProfileImg" 
                        />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">{us.fullname}</span>
                </li>
            ))}
        </ul>
    )
}