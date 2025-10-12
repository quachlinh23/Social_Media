import { createContext, useContext, useState } from "react";
import { Users } from "../../Data";

// Tạo context
const AuthContext = createContext();

// Hook tiện dụng để dùng AuthContext
export const useAuth = () => useContext(AuthContext);

// Provider bao quanh toàn ứng dụng
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("User");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    //Login
    const login = (email, password) => {
        if (!email || !password) {
        return { success: false, message: "Vui lòng nhập đầy đủ thông tin" };
        }

        const foundUser = Users.find((us)=> us.email.toLowerCase() === email.toLowerCase());

        if (!foundUser || foundUser.password !== password) {
        return { success: false, message: "Tên đăng nhập hoặc mật khẩu không đúng" };
        }

        setUser(foundUser);
        localStorage.setItem("User", JSON.stringify(foundUser));
        return { success: true };
    };

    //Logout
    const logout = () => {
        setUser(null);
        localStorage.removeItem("User");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};