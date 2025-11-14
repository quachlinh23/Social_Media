import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import FriendVisit from "./Pages/FriendVisit/FriendVisit";
import Register from "./Pages/Register/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ChangePassWord from "./Pages/ChangePassWord/ChangePassWord";
import Research from "./Pages/Research/Research";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { AuthProvider, useAuth } from "./Components/context/AuthContext";

// Component bảo vệ route – chỉ cho phép truy cập khi đã đăng nhập
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <BrowserRouter>
      {/* Cung cấp context xác thực cho toàn bộ ứng dụng */}
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/*Các route yêu cầu đăng nhập */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/changePass"
            element={
              <ProtectedRoute>
                <ChangePassWord />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <Research />
              </ProtectedRoute>
            }
          />
          <Route
            path="/visitProfile/:id"
            element={
              <ProtectedRoute>
                <FriendVisit />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
