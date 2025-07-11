import { Outlet } from "react-router-dom";
import SideBar from "../components/Dashboard/sidebar";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="main-content">
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
