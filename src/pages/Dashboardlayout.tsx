import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/Dashboard/sidebar";
import Navbar from "../components/Common/Navbar";
import { useAuth } from "../store/useAuth";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
interface TokenPayload {
  userId: string;
  exp: number;
}
const DashboardLayout = () => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  useEffect(() => {
    if (!token) {
      logout();
      navigate("/");
      return;
    }

    try {
      const decoded: TokenPayload = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decoded.exp < currentTime) {
        logout();
        navigate("/");
      }
    } catch (error) {
      logout();
      navigate("/login");
    }
  }, [token, navigate, logout]);

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <SideBar />
        <div className="main-content">
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
