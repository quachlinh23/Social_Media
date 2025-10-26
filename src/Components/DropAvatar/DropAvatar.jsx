import { Link, useNavigate } from 'react-router-dom'
import './DropAvatar.css'
import { useAuth } from '../context/AuthContext';

export default function DropAvatar({User}) {
    const nagative = useNavigate(); // hook chuyển trang
    const { logout } = useAuth(); // lấy hàm logout từ context
    
    //Hàm xử lý đăng xuất
    function HandleLogout(){
        logout();
        nagative("/login");
    }

    return (
        <div className="dropDownAvatar">
            <ul className="OptionLists">
                {/* Link đến trang cá nhân */}
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

                {/* Link đổi mật khẩu */}
                <Link to={"/changePass"} className='noLinkStyle'>
                    <li className="Option">Đổi mật khẩu</li>
                </Link>

                {/* Tùy chọn đăng xuất */}
                <li className="Option" onClick={HandleLogout}>
                    Đăng xuất
                </li>
            </ul>
        </div>
    )
}