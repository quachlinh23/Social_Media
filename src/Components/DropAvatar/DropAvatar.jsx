import { Link, useNavigate } from 'react-router-dom'
import './DropAvatar.css'
export default function DropAvatar() {
    const userId = Number(localStorage.getItem("UserId"));
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
                            src="./assets/Person/Person1.jpg" 
                            alt=""
                            className="OptionImg"
                        />
                        
                        <span className="optionName">
                            Quach
                        </span>
                    </li>
                </Link>
                <li className="Option">Đổi mật khẩu</li>
                <li className="Option" onClick={HandleLogout}>
                    Đăng xuất
                </li>
            </ul>
        </div>
    )
}
