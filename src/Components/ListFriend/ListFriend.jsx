import './ListFriend.css'
import { Users } from '../../Data'
export default function ListFriend( {id} ) {
    const UsersInfo = Users.find((us) => us.id === Number(id));
    const List =  UsersInfo?.friends || [];
    const ListFriend = Users.filter(
        (userFriend) => List.includes(userFriend.id)
    );

    return (
        <div className="ListFriends">
            {ListFriend.length > 0 ? (
                ListFriend.map((friend) => (
                    <div className="ListFriend" key={friend.id}>
                        <div className="FriendImg">
                            <img 
                                src={friend.profilePicture}
                                alt=""
                                className="FriendAvt"
                            />
                        </div>

                        <div className="FriendName">
                            <span className="NickName">
                                {friend.username}
                            </span>
                        </div>
                    </div>
                ))
            ) : (
                <p className="nofriend">Người này chưa có bạn bè</p>
            )}       
        </div>
    )
}
