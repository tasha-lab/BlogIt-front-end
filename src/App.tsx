import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Common/Navbar";
import Homepage from "./pages/homepage";
import Signup from "./pages/signup";
import Login from "./pages/Login";
import ResetPassword from "./pages/resetPassword";
import Footer from "./components/Common/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
