import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout.js";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image from "../Images/bg1.jpg";
import { useAuth } from "../context/auth.js";
const Homepage = () => {
  const [auth] = useAuth();
  const [currentImg, setCurrentImg] = useState(0);
  const imgs = [image1, image2, image3];
  const interval = 3000;

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((currentImg + 1) % imgs.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentImg, imgs.length]);

  function changeSlide(n) {
    setCurrentImg(n);
  }

  const gameQuotes = [
    "Life is more fun if you play games.",
    "In every real man, a child is hidden that wants to play.",
    "Gaming is a way to escape from reality... Or to create a new one.",
    "The only limit is your soul.",
    "Level up your life.",
    "Keep calm and game on.",
    "Winning is not everything, but wanting to win is.",
    "It's dangerous to go alone! Take this.",
    "In the game of life, play the cards you're dealt.",
    "Just one more game...",
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only place where success comes before work is in the dictionary.",
    "Dream big and dare to fail.",
    "You are never too old to set another goal or to dream a new dream.",
    "Success is not the key to happiness. Happiness is the key to success.",
  ];

  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  const randomIndex = getRandomNumber(gameQuotes.length);

  return (
    <Layout>
      <div></div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h1
            style={{
              color: "#CCFF99",
              fontSize: "70px",
              textShadow: "2px 2px 8px #FF0033",
              textAlign: "left",
              paddingLeft: "20px", // Add left padding to move the text to the left
            }}
          >
            Hi,
            <span style={{ fontSize: "50px" }}> {auth?.user?.name}</span>
          </h1>
        </div>
        <div className="waviy">
          <span style={{ "--i": 1 }}>W</span>
          <span style={{ "--i": 2 }}>E</span>
          <span style={{ "--i": 3 }}>L</span>
          <span style={{ "--i": 4 }}>C</span>
          <span style={{ "--i": 5 }}>O</span>
          <span style={{ "--i": 6 }}>M</span>
          <span style={{ "--i": 7 }}>E</span> {/* Space */}
          <span style={{ "--i": 1 }}>T</span>
          <span style={{ "--i": 2 }}>O</span> {/* Space */}
          <span style={{ "--i": 1 }}>S</span>
          <span style={{ "--i": 2 }}>H</span>
          <span style={{ "--i": 3 }}>I</span>
          <span style={{ "--i": 4 }}>N</span>
          <span style={{ "--i": 5 }}>U</span> {/* Space */}
          <span style={{ "--i": 6 }}>G</span>
          <span style={{ "--i": 7 }}>A</span>
          <span style={{ "--i": 8 }}>M</span>
          <span style={{ "--i": 9 }}>E</span>
        </div>
        <div
          className="a"
          style={{
            fontSize: "60px",
            paddingTop: "50px",
            paddingBottom: "100px",
            textAlign: "center",
            color: "#99FFFF",
            textShadow: "2px 2px 20px #FF3300",
          }}
        >
          {gameQuotes[randomIndex]}
        </div>
      </div>

      <div className="slider">
        {imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            style={{ opacity: index === currentImg ? 1 : 0 }}
          />
        ))}
      </div>
      <div className="navigation-button">
        {imgs.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImg ? "active" : ""}`}
            onClick={() => changeSlide(index)}
          ></span>
        ))}
      </div>
    </Layout>
  );
};

export default Homepage;
