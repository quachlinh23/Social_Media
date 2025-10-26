import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // Lấy pathname (đường dẫn hiện tại trong URL)
  const { pathname } = useLocation();

  // useEffect chạy mỗi khi pathname thay đổi (tức là khi người dùng chuyển sang trang khác)
  useEffect(() => {
    // Cuộn trang lên đầu (tọa độ 0,0) mỗi khi đổi route
    window.scrollTo(0, 0);
  }, [pathname]);// dependency: chạy lại khi pathname thay đổi

  return null;
}