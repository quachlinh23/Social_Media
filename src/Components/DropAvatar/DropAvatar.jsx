import { Link, useNavigate } from 'react-router-dom'
import './DropAvatar.css'
import { NavigateNext } from '@mui/icons-material';

export default function DropAvatar({User}) {
    const nagative = useNavigate();
    //Đăng xuất
    function HandleLogout(){
        nagative("/login");
        localStorage.removeItem("UserId");
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
