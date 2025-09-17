import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Profile from './Pages/Profile/Profile'
import FriendVisit from './Pages/FriendVisit/FriendVisit'
import Register from './Pages/Register/Register'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ChangePassWord from './Pages/ChangePassWord/ChangePassWord'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/changePass' element={<ChangePassWord />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/profile/:id' element={<Profile />}/>
          <Route path='/visitProfile/:id' element={<FriendVisit />}/>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </>
  )
}

export default App
