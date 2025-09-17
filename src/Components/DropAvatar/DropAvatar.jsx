import { Link, useNavigate } from 'react-router-dom'
import './DropAvatar.css'
import { Users } from '../../Data'

export default function DropAvatar() {
    const userId = Number(localStorage.getItem("UserId"));
    const currentUser = Users.find((us) => us.id === userId);
    const nagative = useNavigate();

    function HandleLogout(){
        nagative("/login");
        localStorage.removeItem("UserId");
    }

    return (
        <div className="dropDown">
            <ul className="OptionLists">
                <Link to={`/profile/${userId}`} className='noLinkStyle'>
                    <li className="OtpionProfile">
                        <img 
                            src={currentUser.profilePicture} 
                            alt=""
                            className="OptionImg"
                        />
                        
                        <span className="optionName">
                            {currentUser.fullname}
                        </span>
                    </li>
                </Link>
                <Link to={"/changePass"} className='noLinkStyle'>
                    <li className="Option">Đổi mật khẩu</li>
                </Link>
                <li className="Option" onClick={HandleLogout}>
                    Đăng xuất
                </li>
            </ul>
        </div>
    )
}
