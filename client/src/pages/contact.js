import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import image from "../Images/contactus.jpg";
import image2 from "../Images/bg5.jpg";
const Contact = () => {
  return (
    <Layout>
      <div
        className="row contactus "
        style={{ backgroundImage: `url(${image2})`, minHeight: "150px" }}
      >
        <div className="col-md-6 ">
          <img
            src={image}
            alt="contactus"
            style={({ width: "400px" }, { height: "540px" })}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.shinu@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 8766979575
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-8765-1463 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
