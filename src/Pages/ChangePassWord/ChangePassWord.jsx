import './ChangePassWord.css'
import Topbar from '../../Components/Topbar/Topbar'
import { Link, useNavigate } from 'react-router-dom'
export default function ChangePassWord() {
    const navigative = useNavigate();

    function handleCancel() {
        navigative("/");
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
                    />

                    <input
                        placeholder="Mật khẩu mới"
                        type='password'
                        className="changeInput"
                    />

                    <input 
                        placeholder="Xác nhận mật khẩu mới"
                        type='password'
                        className="changeInput"
                    />
                    {/* <span className="errorForm">{error}</span> */}

                    <div className="TextChoice">
                        <button 
                            className="cancelButton" onClick={handleCancel}
                        >
                            Hủy bỏ
                        </button>

                        <button 
                            className="changeButton" 
                        >
                            Lưu thay đổi
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
