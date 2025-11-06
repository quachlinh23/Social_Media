import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useEffect, useState } from "react";

export default function Register() {
  // Khai báo state cho các trường nhập liệu
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  // Tạo danh sách ngày, tháng, năm cho dropdown
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 2025 - 1950 + 1 }, (_, i) => 2025 - i);
  const [listcountry, setListCountry] = useState([]);
  const [country, setCountry] = useState([]);
  const navigate = useNavigate();

  // Xử lý khi người dùng nhấn nút đăng ký
  function handleRegister() {
    if (
      firstName === "" ||
      lastName === "" ||
      gender === "" ||
      email === "" ||
      passWord === "" ||
      day === "" ||
      month === "" ||
      year === "" ||
      country === ""
    ) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    } else {
      if (passWord.length < 15) {
        setError("Mật khẩu tối thiểu phải 15 kí tự");
        return;
      } else {
        setError("");
        navigate("/login");
      }
    }
  }
  // Lấy danh sách quốc gia từ API khi component được render lần đầu
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=cca2,name,flags")
      .then((res) => res.json())
      .then((data) => {
        const country = data.map((c) => ({
          code: c.cca2,
          name: c.name.common,
        }));
        setListCountry(country);
      })
      .catch((er) => {
        console.log("Lỗi khi lấy quốc gia: ", er);
      });
  }, []);

  return (
    <div className="register">
      <div className="registerWrapper">
        {/* Bên trái - giới thiệu */}
        <div className="registerLeft">
          <h3 className="registerLogo">Social Media</h3>
          <span className="registerDesc">
            Kết nối bạn bè, chia sẻ mọi khoảnh khắc.
          </span>
        </div>
        {/* Bên phải - form đăng ký */}
        <div className="registerRight">
          <div className="registerBox">
            <span className="titleregister">Đăng Kí Tài Khoản</span>
            {/* Nhập họ và tên */}
            <div className="FullName">
              <div className="FullNameContain">
                <input
                  placeholder="Họ"
                  className="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                  placeholder="Tên"
                  className="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* Chọn giới tính */}
            <div className="genderGroup">
              <label className="titleGender">Giới tính</label>
              <div className="genderGroupContain">
                <div className="genderMan" onClick={() => setGender("Nam")}>
                  <label>Nam</label>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Nam"
                    checked={gender === "Nam"}
                    required
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>

                <div className="genderWoMen" onClick={() => setGender("Nu")}>
                  <label>Nữ</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Nu"
                    checked={gender === "Nu"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Chọn ngày sinh */}
            <div className="dobGroup">
              <label className="titleBirthday">Ngày sinh</label>
              <div className="dobGroupContain">
                <select
                  className="selectBirthday"
                  name="day"
                  value={day}
                  required
                  onChange={(e) => setDay(Number(e.target.value))}
                >
                  <option value="">Ngày</option>
                  {days.map((day, index) => (
                    <option value={index}>{day}</option>
                  ))}
                </select>
                <select
                  className="selectBirthday"
                  name="month"
                  value={month}
                  required
                  onChange={(e) => setMonth(Number(e.target.value))}
                >
                  <option value="">Tháng</option>
                  {months.map((month, index) => (
                    <option key={index}>{month}</option>
                  ))}
                </select>
                <select
                  className="selectBirthday"
                  name="year"
                  value={year}
                  required
                  onChange={(e) => setYear(Number(e.target.value))}
                >
                  <option value="">Năm</option>
                  {years.map((month, index) => (
                    <option key={index}>{month}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Chọn quốc gia */}
            <div className="CountryGroup">
              <label className="titleCountry">Quốc gia</label>
              <div className="countryContain">
                <select
                  className="selectcountry"
                  name="country"
                  value={country}
                  required
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Quốc gia</option>
                  {listcountry.map((c) => (
                    <option value={c.code}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Nhập email và mật khẩu */}
            <input
              placeholder="Email"
              className="registerInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              className="registerInput"
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
              autoComplete="new-password"
            />
            {/* Hiển thị lỗi nếu có */}
            {error && <span className="errorForm">{error}</span>}
            {/* Nút đăng ký */}
            <button className="buttonregister" onClick={handleRegister}>
              Đăng kí
            </button>

            {/* Chuyển hướng sang trang đăng nhập */}
            <div className="OptionLogin">
              <Link to={"/login"} className="noLinkStyle">
                <span className="buttonLogin">Bạn đã có tài khoản?</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
