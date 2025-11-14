import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Page from "./pages/pagenotfound.js";
import Register from "./pages/auth/Register.js";
import Dashboard from "./pages/user/Dashboard.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/auth/Login.js";
import PrivateRoute from "./components/Routes/Private.js";
import Forgotpassword from "./pages/auth/ForgotPasssword.js";
import AdminRoute from "../src/components/Routes/AdminRoute.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import User from "./pages/Admin/user.js";
import Game from "./pages/Game/game.js";
import Kbc from "./pages/Game/kbc/kbc.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/kbc" element={<Kbc />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/user" element={<User />} />
        </Route>
        <Route path="/*" element={<Page />} />
      </Routes>
    </>
  );
}

export default App;
