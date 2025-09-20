import './ChangePassWord.css'
import Topbar from '../../Components/Topbar/Topbar'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Users } from '../../Data';
export default function ChangePassWord() {
    const navigative = useNavigate();
    const IdUser = Number(localStorage.getItem("UserId"));
    const [passOld, setPassOld] = useState("");
    const [passNew, setPassNew] = useState("");
    const [prePassNew, setPrePassNew] = useState("");
    const [error, setError] = useState("");
    const CurrentUser = Users.find((us)=> us.id === IdUser);

    function handleCancel() {
        navigative("/");
    }

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

                    <input
                        placeholder="Mật khẩu mới"
                        type='password'
                        className="changeInput"
                        value={passNew}
                        onChange={(e) => setPassNew(e.target.value)}
                    />

                    <input 
                        placeholder="Xác nhận mật khẩu mới"
                        type='password'
                        className="changeInput"
                        value={prePassNew}
                        onChange={(e) => setPrePassNew(e.target.value)}
                    />
                    <span className="errorForm">{error}</span>
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
