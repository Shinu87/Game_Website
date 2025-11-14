import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout.js";
import axios from "axios";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import "../../components/styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Form submission function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          user: res.data.user,
          kbcmoney: res.data.user.kbcmoney,
          token: res.data.token,
        });
        localStorage.setItem("token", res.data.token); // Storing only the token
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      // Log the specific error details
      console.error("Error during login:", error);
      toast.error("Something went wrong during login. Please try again.");
    }
  };

  return (
    <Layout title="Login - Ecommerce App">
      <section className="signin">
        <div className="content">
          <h2>Sign In</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="inputBox">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <div className="links">
              <a href="#">Forgot Password</a>
              <NavLink to="/register">Signup</NavLink>
            </div>
            <div className="inputBox">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
