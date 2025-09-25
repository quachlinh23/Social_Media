import { Users } from '../../Data';
import Online from '../Online/Online'
import './Rightbar.css'


export default function Rightbar() {
  const currentUser = localStorage.getItem("UserId");
  
  function isBirthday(date) {
    const NowDate = new Date();
    const birthdayUser = new Date(date);
    return NowDate.getDate() === birthdayUser.getDate() &&
         NowDate.getMonth() === birthdayUser.getMonth();
  }

  const ListBirthday = Users.filter((us) => isBirthday(us.birthday));

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {ListBirthday.length > 0 && (
          <>
            <h4 className="BirthdayTitle">Sinh nhật</h4>
            <div className="birthdayContainer">
                  <img className="birthdayImg" src="/assets/Event/Birthday.jpg" alt="" />
                  <span className="birthdayText">
                    Hôm nay là sinh nhật của  <strong>{ListBirthday[0].fullname}</strong>
                    {ListBirthday.length < 2 && (<> .</>)}
                    {
                      ListBirthday.length > 1 && (
                        <>
                          and <strong>{ListBirthday.length -1} người khác</strong>.
                        </>
                      )
                    }  
                  </span>
            </div>
            <hr className="hrRightbar"/>
          </>
        )}
        <h4 className="Ads">Được tài trợ</h4>
        <div className="ads">
          <img src="/assets/Event/QuangCao.jpg" alt="" className="rightbarAd" />
        </div>
        <hr className="hrRightbar"/>
        <h4 className="rightbarTitle">Người liên hệ</h4>
        <Online 
          idUs={currentUser}
        />
      </div>
    </div>
  )
}
