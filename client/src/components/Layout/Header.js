import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { GrGamepad } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { MdPhoneCallback } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import image from "..//../Images/bg3.jpg";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    localStorage.removeItem("maxScore");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          backgroundImage: `url(${image})`,
          minHeight: "10vh",
          color: "white", // Set the default text color to white
        }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link
              to="/"
              className="navbar-brand"
              style={{ fontSize: "30px", color: "white" }}
            >
              {/* Set the color of the navbar-brand text to white */}
              <GrGamepad />
              Game
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" style={{ color: "white" }}>
                  {/* Set the color of the nav-link text to white */}
                  <FaHome />
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  to="/game"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Games
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  to="/About"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  <FaRegUser />
                  About
                </NavLink>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      style={{ color: "white" }}
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: "white" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                          style={{ color: "black" }}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                          style={{ color: "black" }}
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className="nav-link mx-2"
                  style={{ color: "white" }}
                >
                  <MdPhoneCallback />
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
