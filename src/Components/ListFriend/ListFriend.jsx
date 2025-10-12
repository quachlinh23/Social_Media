import './ListFriend.css'
import { Users } from '../../Data'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ListFriend( {id} ) {
    const { user } = useAuth();

    const currentUser = Users.find((us) => us.id === Number(id));
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
                                to={user.id === friend.id ? `/profile/${friend.id}` : `/visitProfile/${friend.id}`} className="noLinkStyle"
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
                                to={user.id === friend.id ? `/profile/${friend.id}` : `/visitProfile/${friend.id}`} className="noLinkStyle">
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