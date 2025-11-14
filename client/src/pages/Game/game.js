import React from "react";
import Layout from "../../components/Layout/Layout.js";
import { NavLink } from "react-router-dom";
import kbc from "../../Images/kbc.png";

const Game = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          marginTop: "150px",
        }}
      >
        <div className="card" style={{ width: "22rem", margin: "10px" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/racing" className="custom-button">
              Go somewhere
            </NavLink>
          </div>
        </div>
        <div className="card" style={{ width: "22rem", margin: "10px" }}>
          <img src={kbc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">KOUN BANEGA CROREPATI</h5>
            <p className="card-text">
              Believe you can and you're halfway there.
            </p>
            <NavLink
              to="/game/kbc"
              className="custom-button"
              style={{ marginTop: "20px" }}
            >
              Go somewhere
            </NavLink>
          </div>
        </div>
        <div className="card" style={{ width: "22rem", margin: "10px" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink
              to="/game/candy"
              className="custom-button"
              style={{ marginTop: "20px" }}
            >
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Game;
