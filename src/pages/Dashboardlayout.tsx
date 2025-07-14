import { Outlet } from "react-router-dom";
import SideBar from "../components/Dashboard/sidebar";
import Navbar from "../components/Common/Navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <SideBar />
        <div className="main-content">
          <div className="page-content">
            <div className="profile-header">
              <h3>My posts</h3>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
