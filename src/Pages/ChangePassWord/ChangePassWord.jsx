import './ChangePassWord.css'
import Topbar from '../../Components/Topbar/Topbar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Users } from '../../Data';
import { useAuth } from '../../Components/context/AuthContext';
export default function ChangePassWord() {
    const navigative = useNavigate(); // Dùng để điều hướng trang
    const { user } = useAuth();
    
    // Các state lưu trữ dữ liệu nhập vào
    const [passOld, setPassOld] = useState("");
    const [passNew, setPassNew] = useState("");
    const [prePassNew, setPrePassNew] = useState("");
    const [error, setError] = useState("");
    const CurrentUser = Users.find((us)=> us.id === user.id);

    // Hàm xử lý khi người dùng hủy bỏ việc đổi mật khẩu
    function handleCancel() {
        navigative("/");
    }

    // Hàm xử lý khi người dùng cập nhật mật khẩu mới
    function HandleUpdatePassword() {
        if (!passOld || !passNew || !prePassNew) {
            setError("Vui lòng nhập đầy đủ thông tin.");
            return;
        }

        if (CurrentUser.password !== passOld) {
            setError("Mật khẩu cũ không khớp");
            return;
        }

        if (passNew === passOld) {
            setError("Mật khẩu mới phải khác mật khẩu cũ");
            return;
        }

        if (passNew !== prePassNew) {
            setError("Xác nhận mật khẩu không khớp");
            return;
        }

        setError("");
        navigative("/login");
        localStorage.removeItem("UserId");
    }

    return (
        <>
            <Topbar />
            <div className="change">
                <div className="changeBox">
                    
                    <span className="titleChange">
                        Đổi mật khẩu
                    </span>
                    {/* Ô nhập mật khẩu cũ */}
                    <input
                        name="change"
                        id="oldPass"
                        placeholder="Mật khẩu cũ"
                        type='password'
                        className="changeInput"
                        autoComplete="new-password"
                        value={passOld}
                        onChange={(e) => setPassOld(e.target.value)}
                    />
                    {/* Ô nhập mật khẩu mới */}
                    <input
                        placeholder="Mật khẩu mới"
                        type='password'
                        className="changeInput"
                        value={passNew}
                        onChange={(e) => setPassNew(e.target.value)}
                    />
                    {/* Ô nhập lại mật khẩu mới */}
                    <input 
                        placeholder="Xác nhận mật khẩu mới"
                        type='password'
                        className="changeInput"
                        value={prePassNew}
                        onChange={(e) => setPrePassNew(e.target.value)}
                    />
                    {/* Nơi hiển thị lỗi*/}
                    <span className="errorForm">{error}</span>
                    {/* Nút lưu hoặc hủy bỏ */}
                    <div className="TextChoice">
                        <button 
                            className="cancelButton" onClick={handleCancel}
                        >
                            Hủy bỏ
                        </button>

                        <button 
                            className="changeButton"
                            onClick={HandleUpdatePassword}
                        >
                            Lưu thay đổi
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}