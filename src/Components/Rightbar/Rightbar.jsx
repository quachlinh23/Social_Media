import { Users } from "../../Data";
import Ads from "../Ads/Ads";
import Online from "../Online/Online";
import "./Rightbar.css";
import { useAuth } from "../context/AuthContext";

export default function Rightbar() {
  const { user } = useAuth(); // Lấy thông tin user hiện tại từ context

  // Hàm kiểm tra xem hôm nay có phải sinh nhật của user hay không
  function isBirthday(date) {
    const NowDate = new Date();
    const birthdayUser = new Date(date);
    return (
      NowDate.getDate() === birthdayUser.getDate() &&
      NowDate.getMonth() === birthdayUser.getMonth()
    );
  }

  // Lọc danh sách người dùng có sinh nhật hôm nay
  const ListBirthday = Users.filter((us) => isBirthday(us.birthday));

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* --- KHU VỰC SINH NHẬT --- */}
        {ListBirthday.length > 0 && (
          <>
            <h4 className="BirthdayTitle">Sinh nhật</h4>
            <div className="birthdayContainer">
              <img
                className="birthdayImg"
                src="/assets/Event/Birthday.jpg"
                alt=""
              />
              <span className="birthdayText">
                Hôm nay là sinh nhật của{" "}
                <strong>{ListBirthday[0].fullname}</strong>
                {ListBirthday.length < 2 && <> .</>}
                {ListBirthday.length > 1 && (
                  <>
                    <pre>
                      và <strong>{ListBirthday.length - 1} người khác</strong>.
                    </pre>
                  </>
                )}
              </span>
            </div>
            <hr className="hrRightbar" />
          </>
        )}
        {/* --- KHU VỰC QUẢNG CÁO --- */}
        <h4 className="Ads">Được tài trợ</h4>
        <div className="ads">
          <Ads />
          <Ads />
        </div>
        <hr className="hrRightbar" />
        {/* --- DANH SÁCH NGƯỜI LIÊN HỆ (ONLINE) --- */}
        <h4 className="rightbarTitle">Người liên hệ</h4>
        <Online />
      </div>
    </div>
  );
}
