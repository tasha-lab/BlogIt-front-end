import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <div className="logo-picture">
          <img src="./images/logo.png" alt="" />
        </div>
        <h2 className=" header">BlogIt</h2>
      </div>
      <div className="appbar">
        <h4>
          <Link className="nav-links" to="/">
            Home
          </Link>
        </h4>
        <h4>
          <Link className="nav-links" to="/blogs">
            Blogs
          </Link>
        </h4>
        <h4>
          <Link className="nav-links" to="/writeBlogs">
            Write a blog
          </Link>
        </h4>
      </div>
      <div className="profile">
        <Link className="profile-link" to="/dashboard">
          <CiUser />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
