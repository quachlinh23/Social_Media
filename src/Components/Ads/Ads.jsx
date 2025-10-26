import { Close, Remove } from '@mui/icons-material'
import './Ads.css'
import { useState } from 'react'

export default function Ads() {
    // State hover để kiểm tra chuột có đang ở trên quảng cáo hay không
    const [hover, setHover] = useState(false);
    // State close để kiểm tra quảng cáo đã bị đóng chưa
    const [close, setClose] = useState(false);

    // Hàm đổi trạng thái hover khi chuột vào hoặc ra khỏi quảng cáo
    function HandleHover(){
        setHover(!hover);
    }

    // Hàm đóng quảng cáo, khi click icon Close sẽ set state close = true
    function HandleClose(){
        setClose(true)
    }
    return (
        <div className="AdsContain">
            {/* Nếu quảng cáo chưa bị đóng mới render */}
            {!close &&
                <div className="AdsItem" 
                    onMouseEnter={HandleHover}
                    onMouseLeave={HandleHover}
                >      
                    {/* Phần trái chứa hình ảnh */}
                    <div className="AdsItemLeft">
                        <img 
                            src="/assets/Event/QuangCao.jpg" 
                            alt="" 
                            className="AdsItemLeftImg" 
                        />
                    </div>
                    {/* Phần phải chứa text quảng cáo */}
                    <div className="AdsItemRight">
                        <span className="AdsItemRightText">
                            Matcha Latte thơm ngon
                        </span>
                    </div>
                    {/* Nếu hover thì hiển thị nút Close */}
                    {hover && 
                        <Close className="IconItem" onClick={HandleClose}/>
                    }
                </div>
            }
        </div>
    )
}
