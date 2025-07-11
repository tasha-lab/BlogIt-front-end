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
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
