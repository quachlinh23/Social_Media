import Online from '../Online/Online'
import './Rightbar.css'

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/Event/Birthday.jpg" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/Event/QuangCao.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Người liên hệ</h4>
          <Online />
      </div>
    </div>
  )
}
