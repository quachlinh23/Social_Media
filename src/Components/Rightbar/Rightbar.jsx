import Online from '../Online/Online'
import './Rightbar.css'

export default function Rightbar() {
  const currentUser = localStorage.getItem("UserId");
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/Event/Birthday.jpg" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 người khác</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/Event/QuangCao.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Người liên hệ</h4>
          <Online idUs={currentUser} />
      </div>
    </div>
  )
}
