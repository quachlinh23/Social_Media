import { Close, Remove } from '@mui/icons-material'
import './Ads.css'
import { useState } from 'react'

export default function Ads() {
    const [hover, setHover] = useState(false);
    const [close, setClose] = useState(false);

    function HandleHover(){
        setHover(!hover);
    }

    function HandleClose(){
        setClose(true)
    }
    return (
        <div className="AdsContain">
            {!close &&
                <div className="AdsItem" 
                    onMouseEnter={HandleHover}
                    onMouseLeave={HandleHover}
                >
                    <div className="AdsItemLeft">
                        <img 
                            src="/assets/Event/QuangCao.jpg" 
                            alt="" 
                            className="AdsItemLeftImg" 
                        />
                    </div>
                    <div className="AdsItemRight">
                        <span className="AdsItemRightText">
                            Matcha Latte thơm ngon
                        </span>
                    </div>
                    {hover && 
                        <Close className="IconItem" onClick={HandleClose}/>
                    }
                </div>
            }
        </div>
    )
}
