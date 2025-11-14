import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Toaster />
      <Footer />
    </div>
  );
};

export default layout;
