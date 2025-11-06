import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Rightbar from '../../Components/Rightbar/Rightbar'
import Feed from '../../Components/Feed/Feed'
import './Home.css'


export default function Home() {
  return (
    <>
      {/* Topbar được hiển thị ở trên cùng toàn trang */}
      <Topbar />
      {/* homeContainer bao gồm 3 phần: Sidebar (trái), Feed (giữa), Rightbar (phải) */}
      <div className="homeContainer">
          <Sidebar />
          <Feed />
          <Rightbar /> 
      </div>
    </>
  )
}
