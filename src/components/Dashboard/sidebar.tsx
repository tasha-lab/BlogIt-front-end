import { Eye, Plus, UserPen } from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-links">
          <Link className="side-link" to="/writeBlogs">
            <Plus /> Create Blog
          </Link>
          <Link className="side-link" to="/viewBlogs">
            <Eye />
            View Blogs
          </Link>
          <Link className="side-link" to="/profile">
            <UserPen />
            Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
