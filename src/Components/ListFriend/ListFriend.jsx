import './ListFriend.css'
import { Users } from '../../Data'
import { Link } from 'react-router-dom';

export default function ListFriend( {id} ) {
    const currentUser = Users.find((us) => us.id === Number(id));
    const UserLogin = Number(localStorage.getItem("UserId"));
    const List =  currentUser?.friends || [];
    const ListFriend = Users.filter(
        (userFriend) => List.includes(userFriend.id)
    );
 
    return (
        <div className="ListFriends">
            {ListFriend.length > 0 ? (
                ListFriend.map((friend) => (
                    <div className="ListFriend" key={friend.id}>
                        <div className="FriendImg">
                            <Link 
                                to={UserLogin === friend.id ? `/profile/${friend.id}` : `/visitProfile/${friend.id}`} className="noLinkStyle"
                            >
                                <img 
                                    src={friend.profilePicture}
                                    alt=""
                                    className="FriendAvt"
                                />
                            </Link>
                        </div>

                        <div className="FriendName">
                            <Link 
                                to={UserLogin === friend.id ? `/profile/${friend.id}` : `/visitProfile/${friend.id}`} className="noLinkStyle">
                                <span className="NickName">
                                    {friend.fullname}
                                </span>
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <p className="nofriend">Chưa có bạn bè</p>
            )}       
        </div>
    )
}
