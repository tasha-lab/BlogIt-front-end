import { Button, Stack } from "@mui/material";
import { Eye, Plus, UserPen } from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = () => {
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
            Profile
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default SideBar;
