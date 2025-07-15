import { Button, Stack } from "@mui/material";
import { Eye, LogOut, Plus, UserPen } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/useAuth";

const SideBar = () => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div className="sidebar">
        <Stack spacing={3} direction={"column"} className="sidebar-links">
          <Button
            component={Link}
            sx={{ color: "#000000" }}
            className="side-link"
            to="/writeBlogs"
          >
            <Plus style={{ marginRight: "1rem" }} /> Create Blog
          </Button>
          <Button
            component={Link}
            sx={{ color: "#000000" }}
            className="side-link"
            to="/blogs"
          >
            <Eye style={{ marginRight: "1rem" }} />
            View Blogs
          </Button>
          <Button
            component={Link}
            sx={{ color: "#000000" }}
            className="side-link"
            to="/profile"
          >
            <UserPen style={{ marginRight: "1rem" }} />
            Edit Profile
          </Button>
          <Button
            onClick={handleLogout}
            sx={{ color: "#000000" }}
            className="side-link"
          >
            <LogOut style={{ marginRight: "1rem" }} />
            Log out
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default SideBar;
