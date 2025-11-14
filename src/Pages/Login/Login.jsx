import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/context/AuthContext";

export default function Login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    const result = login(email, password); // gọi hàm ở authcontext trả về {success, message}

    if (result.success) {
      setError("");
      navigate("/"); //Chuyển đến trang chủ nếu đăng nhập thành công
    } else {
      setError(result.message); // Hiển thị lỗi khi người dùng đăng nhập không thành công
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        {/*Phần bên trái hiển thị logo và sologan*/}
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">
            Kết nối bạn bè, chia sẻ mọi khoảnh khắc.
          </span>
        </div>
        {/*Phần bên phải hiển thị box đăng nhập*/}
        <div className="loginRight">
          <div className="loginBox">
            <span className="titleLogin">Đăng Nhập</span>
            {/*Input lấy dữ liêu*/}
            <input
              placeholder="Email"
              className="loginInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Mật khẩu"
              type="password"
              className="loginInput"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
            />
            {/*Nơi hiển thị lỗi nếu có*/}
            {error && <span className="errorForm">{error}</span>}
            {/*Nút đăng nhập*/}
            <button className="loginButton" onClick={handleLogin}>
              Đăng nhập
            </button>
            {/*Nơi chọn chưa có tài khoản or quên mật khẩu*/}
            <div className="OptionRegister">
              <span className="forgotButton">Quên mật khẩu?</span>|
              <Link to={"/register"} className="noLinkStyle">
                <span className="registerButton"> Bạn chưa có tài khoản?</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
