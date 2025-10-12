import { Link, useNavigate } from 'react-router-dom'
import './DropAvatar.css'
import { useAuth } from '../context/AuthContext';

export default function DropAvatar({User}) {
    const nagative = useNavigate();
    const { logout } = useAuth();
    
    //Đăng xuất
    function HandleLogout(){
        logout();
        nagative("/login");
    }

    return (
        <div className="dropDownAvatar">
            <ul className="OptionLists">
                <Link to={`/profile/${User.id}`} className='noLinkStyle'>
                    <li 
                        className="OtpionProfile"
                        title='Truy cập trang cá nhân'
                    >
                        <img 
                            src={User.profilePicture} 
                            alt=""
                            className="OptionImg"
                        />
                        <span className="optionName">
                            {User.fullname}
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
