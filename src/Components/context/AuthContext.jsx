import { createContext, useContext, useState } from "react";
import { Users } from "../../Data";

// Tạo AuthContext để quản lý trạng thái đăng nhập toàn app
const AuthContext = createContext();

// Hook tiện dụng để dùng AuthContext ở bất kỳ component nào
export const useAuth = () => useContext(AuthContext);

// Provider bao quanh toàn ứng dụng, cung cấp user, login và logout
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Hàm login, trả về object {success, message}
  const login = (email, password) => {
    if (!email || !password) {
      return { success: false, message: "Vui lòng nhập đầy đủ thông tin" };
    }

    const foundUser = Users.find(
      (us) => us.email.toLowerCase() === email.toLowerCase()
    );

    if (!foundUser || foundUser.password !== password) {
      return {
        success: false,
        message: "Tên đăng nhập hoặc mật khẩu không đúng",
      };
    }

    setUser(foundUser);
    localStorage.setItem("user", JSON.stringify(foundUser));
    return { success: true };
  };

  // Hàm logout, xóa user khỏi state và localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Cung cấp value cho toàn bộ component con
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
