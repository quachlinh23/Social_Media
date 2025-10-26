import { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Users } from '../../Data'
import { useAuth } from '../../Components/context/AuthContext';
// import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const navigate = useNavigate();
  const {login} = useAuth();

  const handleLogin = () => {
    const result = login(email, password); // trả về {success, message}
    
    if (result.success) {
      setError('');
      navigate('/');
    } else {
      setError(result.message); // Hiển thị lỗi đúng
    }
  };

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">Social Media</h3>
              <span className="loginDesc">Kết nối bạn bè, chia sẻ mọi khoảnh khắc.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <span className="titleLogin">
                      Đăng Nhập
                    </span>
                    {/*Input lấy dữ liêu*/}
                    <input 
                      placeholder="Email" 
                      className="loginInput"
                      value={email}
                      onChange={(e) => setEmail(e.target.value) }
                    />
                    <input 
                      placeholder="Mật khẩu"
                      type='password'
                      className="loginInput"
                      value={password}
                      onChange={(e) => setPassWord(e.target.value) }
                    />
                    {/*Nơi hiển thị lỗi*/}
                    {error &&
                      <span className="errorForm">{error}</span>
                    }
                    {/*Xử lý sự kiện khi click*/}
                    <button 
                      className="loginButton" 
                      onClick={handleLogin}
                    >
                        Đăng nhập
                    </button>

                    <div className="TextChoice">
                      <span className="forgotButton">Quên mật khẩu?</span>|
                      <Link to={"/register"} className="noLinkStyle">
                        <span className="registerButton"> Bạn chưa có tài khoản?</span>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}