import { Link } from 'react-router-dom'
import './Register.css'

export default function register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
              <h3 className="registerLogo">Social Media</h3>
              <span className="registerDesc">Kết nối bạn bè, chia sẻ mọi khoảnh khắc.</span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <span className="titleregister">Đăng Kí Tài Khoản</span>

                    <input placeholder="Họ và Tên" className="registerInput" />

                    <div className="genderGroup">
                    <label className="titleGender">Giới tính:</label>
                    <input type="radio" id="male" name="gender" value="Nam" required />
                    <label >Nam</label>

                    <input type="radio" id="female" name="gender" value="Nữ" />
                    <label >Nữ</label>

                    <input type="radio" id="other" name="gender" value="Khác" />
                    <label >Khác</label>
                    </div>

                    <div className="dobGroup">
                        <label className="titleBirthday">Ngày sinh:</label>
                        <select name="day" required>
                            <option value="">Ngày</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        <select name="month" required>
                            <option value="">Tháng</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        <select name="year" required>
                            <option value="">Năm</option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                        </select>
                    </div>

                    <input placeholder="Email" className="registerInput" />
                    <input type="password" placeholder="Mật khẩu" className="registerInput" />

                    <button className="buttonregister">Đăng kí</button>

                    <div className="TextChoice">
                    <Link to={"/login"} className="noLinkStyle">
                        <span className="buttonLogin">
                            Bạn đã có tài khoản?
                        </span>
                    </Link>
                    
                    </div>
                </div>
                </div>

        </div>
    </div>
  )
}
