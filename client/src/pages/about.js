import React from "react";
import Layout from "../components/Layout/Layout.js";
import { useAuth } from "../context/auth";
import { CgProfile } from "react-icons/cg";
import image from "../Images/bg3.jpg";
import image1 from "../Images/bg4.jpg";

const About = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${image})`,
          minHeight: "100vh",
          minWidth: "150vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ minHeight: "80vh" }}
        >
          {/* Centered container */}
          <div
            className="card p-5 "
            style={{
              borderRadius: "16px",
              backgroundColor: "rgba(255, 255, 255, 0)", // Set background color to transparent
              border: "2px solid red", // Remove border
              borderWidth: "4px",
              minHeight: "40vh",
              minWidth: "100vh",
              color: "red",
              marginTop: "-120px",
              backgroundImage: `url(${image1})`,
            }}
          >
            <div className="card-body text-center">
              <h2
                className="card-title mb-4"
                style={{
                  fontSize: "50px",
                  textTransform: "uppercase",
                  color: "#34568b",
                  textShadow: "2px 2px 2px 10px #00ffff",
                }}
              >
                {" "}
                <CgProfile />
                Profile
              </h2>
              <div className="mb-4" style={{ fontSize: "50px" }}>
                <h5
                  className="card-subtitle mb-2 text-muted"
                  style={{ fontSize: "30px" }}
                >
                  <span style={{ color: "#f5f5f5" }}>Admin Name: </span>{" "}
                  <span style={{ color: "#E7EBC5" }}>{auth?.user?.name}</span>
                </h5>
                <h5
                  className="card-subtitle mb-2 text-muted"
                  style={{ fontSize: "30px" }}
                >
                  <span style={{ color: "#f5f5f5" }}>Admin Email:</span>{" "}
                  <span style={{ color: "#E7EBC5" }}>{auth?.user?.email}</span>
                </h5>
                <h5
                  className="card-subtitle mb-2 text-muted"
                  style={{ fontSize: "30px" }}
                >
                  <span style={{ color: "#f5f5f5" }}> Admin Contact: </span>
                  <span style={{ color: "#E7EBC5" }}>{auth?.user?.phone}</span>
                </h5>
                {/* Display user's photo if available */}
                {auth?.user?.photo ? (
                  <img
                    src={auth?.user?.photo}
                    alt="User Photo"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                    onError={(e) => {
                      console.error("Error loading image:", e.target.src);
                      e.target.style.display = "none"; // Hide the image if loading fails
                    }}
                  />
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
