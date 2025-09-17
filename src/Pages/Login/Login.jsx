import { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Users } from '../../Data'

export default function Login() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const navigate = useNavigate();

  function handleLogin(email, password) {
    if (email === '' || password === ''){
      setError("Vui lòng nhập đầy đủ thông tin");
    } else{
      setError('');
      const user = Users.find((us) => (us.email === email));
      if (!user){
        setError("Tên đăng nhập hoặc mật khẩu không đúng");
      }else{
        if (user.password === passWord) {
          navigate("/");
          localStorage.setItem("UserId", user.id)
        }else {
          setError("Tên đăng nhập hoặc mật khẩu không đúng");
        }
      }
    }
  }
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
                      value={passWord}
                      onChange={(e) => setPassWord(e.target.value) }
                    />
                    <span className="errorForm">{error}</span>

                    <button 
                      className="loginButton" 
                      onClick={() => handleLogin(email, passWord)}
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
