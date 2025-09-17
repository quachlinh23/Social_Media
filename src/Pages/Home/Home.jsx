import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Rightbar from '../../Components/Rightbar/Rightbar'
import Feed from '../../Components/Feed/Feed'
import './Home.css'


export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
          <Sidebar />
          <Feed />
          <Rightbar /> 
      </div>
    </>
  )
}
