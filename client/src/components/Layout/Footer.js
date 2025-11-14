import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" style={{ fontSize: "14px" }}>
      <h1 className="text-center" style={{ fontSize: "18px", margin: "0" }}>
        All Rights Reserved &copy; SHINU
      </h1>
      <p className="text-center mt-2">
        <Link to="/about" style={{ marginRight: "10px" }}>
          About
        </Link>
        |
        <Link to="/contact" style={{ margin: "0 10px" }}>
          Contact
        </Link>
        |
        <Link to="/help" style={{ marginLeft: "10px" }}>
          Help
        </Link>
      </p>
    </div>
  );
};

export default Footer;
