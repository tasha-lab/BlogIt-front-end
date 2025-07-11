import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/useAuth";
import { Button, Stack } from "@mui/material";
const Navbar = () => {
  const { token } = useAuth();
  return (
    <div className="navigation">
      <div className="logo">
        <div className="logo-picture">
          <img src="/images/logo.png" alt="" />
        </div>
        <h2 className=" header">BlogIt</h2>
      </div>
      <>
        {token ? (
          <>
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
          </>
        ) : (
          <div className="newUser">
            <Stack direction={"row"} spacing={8}>
              <Button
                component={Link}
                to="/login"
                variant="contained"
                sx={{ bgcolor: "background.default", color: "#000000" }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/sign-up"
                variant="contained"
                sx={{ bgcolor: "background.default", color: "#000000" }}
              >
                Signup
              </Button>
            </Stack>
          </div>
        )}
      </>
    </div>
  );
};

export default Navbar;
