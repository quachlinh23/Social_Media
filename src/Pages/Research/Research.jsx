import { Link, useSearchParams } from 'react-router-dom'
import Topbar from '../../Components/Topbar/Topbar'
import './Research.css'
import { Users } from '../../Data';
import { DynamicFeed, Person, YouTube, Storefront, Flag, Group, Event} from '@mui/icons-material'
import { useAuth } from '../../Components/context/AuthContext';

export default function FindFriend() {
    const {user} = useAuth();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const filterUsers = Users.filter((us) =>
        us.id !== user?.id &&
        us.fullname.toLowerCase().includes((query || "").toLowerCase())
    );
    return (
        <>
            <Topbar />
            <div className="Container">
                <div className="searchFilter">
                    <span className="searchFilterTitle">Kết quả tìm kiếm</span>
                    <hr />
                    <span className="titleFilter">Bộ lọc</span>
                    <ul className="filterLists">
                        <li className="filterItem">
                            <DynamicFeed className="iconFilter"/> Tất cả
                        </li>
                        <li className="filterItem">
                            <Person className="iconFilter"/> Mọi người
                        </li>
                        <li className="filterItem">
                            <YouTube className="iconFilter"/> Video
                        </li>
                        <li className="filterItem">
                            
                            <Storefront className="iconFilter"/> Marketplace
                        </li>
                        <li className="filterItem">
                            <Flag className="iconFilter"/> Trang
                        </li>
                        <li className="filterItem">
                            <Group className="iconFilter"/> Nhóm
                        </li>
                        <li className="filterItem">
                            <Event className="iconFilter"/> Sự kiện
                        </li>
                    </ul>   
                </div>

                <div className="searchContain">
                    {filterUsers.length > 0 ? (
                        filterUsers.map((us) => {
                            const isFriend = us.friends.includes(user.id);
                            return (
                                <div className="searchInfo" key={us.id}>
                                <div className="infoLeft">
                                    <Link 
                                        to={`/visitProfile/${us.id}`}
                                        className="noLinkStyle"
                                    >
                                        <img 
                                            src={us.profilePicture} 
                                            alt="" 
                                            className="infoImg" 
                                        />
                                    </Link>
                                    <Link 
                                        to={`/visitProfile/${us.id}`}
                                        className="noLinkStyle"
                                    >
                                        <span className="infoUserName">
                                            {us.fullname}
                                        </span>
                                    </Link>
                                </div>
                                {isFriend ? (
                                    <button className="addFriend">
                                        Bạn bè
                                    </button>
                                    ) : (
                                    <button className="addFriend">
                                        Thêm bạn bè
                                    </button>
                                )}
                            </div>
                            )
                        } )) : (
                            <div className="noSearch">
                                <img 
                                    src="/assets/Icons/noSearch.jpg" 
                                    alt="" 
                                    className="noSearchIcon" />
                                <p className="noSearchTittle">
                                    Không tìm thấy kết quả nào.
                                </p>
                            </div>
                        )}
                    
                </div>
            </div>
        </>
    )
}