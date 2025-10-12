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


  /*Xử lý login*/
  // function handleLogin() {
  //   if (email === '' || password === ''){
  //     setError("Vui lòng nhập đầy đủ thông tin");
  //   } else{
  //     setError('');
  //     const user = Users.find((us) => (us.email === email));
  //     if (!user){
  //       setError("Tên đăng nhập hoặc mật khẩu không đúng");
  //     }else{
  //       if (user.password === password) {
  //         navigate("/");
  //         localStorage.setItem("UserId", user.id)
  //       }else {
  //         setError("Tên đăng nhập hoặc mật khẩu không đúng");
  //       }
  //     }
  //   }
  // }

  // const handleLogin = async (e) => {
  //   e.preventDefault(); // Ngăn form reload
  //   try {
  //     await login(email, password);
  //     setError("");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };


  const handleLogin = () => {
  try {
    login(email, password);
    setError('');
    navigate('/');
  } catch (err) {
    setError(err.message);
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