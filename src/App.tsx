import { Route, Routes } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage";
import Footer from "./components/Common/Footer";
import Blogpage from "./pages/blogpage";
import ResetPasswordPage from "./pages/resetPasswordPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/signupPage";
import DashboardLayout from "./pages/Dashboardlayout";
import WriteBlogs from "./pages/WriteBlogs";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/blog";
import EditPost from "./pages/EditPost";
import Profile from "./pages/profile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/blogs" element={<Blogpage />} />
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="/writeBlogs" element={<WriteBlogs />} />

        <Route element={<DashboardLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard/" element={<Dashboard />} />
          <Route path="/editpost/:blogId" element={<EditPost />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
