import React from "react";
import "./homePage.css";

const HomePage = () => {
  const CactusImageUrl = "./images/cactus.png";

  return (
    <div className="main-page home-page-main">
      <h3 className="home-page-slogan">
        There is no one <br />
        who loves pain
      </h3>
      <a href="#form-page-form" className="home-page-form-button">
        FORM
      </a>
      <div className="home-page-paragraphs">
        <div className="home-page-boat-1-region">
          <img
            src="./images/boat1/boat.png"
            alt="boat 1"
            className="home-page-boat-1-main"
          />
          <img
            src="./images/boat1/paddle.png"
            alt="paddle"
            className="home-page-boat-1-paddle"
          />
          <img
            src="./images/boat1/bubble.png"
            alt="bubble 1"
            className="home-page-boat-1-bubble1"
          />
          <img
            src="./images/boat1/bubble.png"
            alt="bubble 1"
            className="home-page-boat-1-bubble2"
          />
        </div>
        <div className="home-page-boat-2-region">
          <img
            src="./images/boat2/boat.png"
            alt="boat 2"
            className="home-page-boat-2-main"
          />
          <img
            src="./images/boat2/firework.png"
            alt="firework"
            className="home-page-boat-2-firework"
          />
        </div>
        <div className="home-page-paragraph-title">
          <img
            src={CactusImageUrl}
            alt="cactus"
            className="home-page-image-cactus"
          />
          paragraph
          <img
            src={CactusImageUrl}
            alt="cactus"
            className="home-page-image-cactus"
          />
        </div>
        <p className="home-page-paragraph-content">
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="home-page-paragraph-title">
          <img
            src={CactusImageUrl}
            alt="cactus"
            className="home-page-image-cactus"
          />
          paragraph
          <img
            src={CactusImageUrl}
            alt="cactus"
            className="home-page-image-cactus"
          />
        </div>
        <p className="home-page-paragraph-content">
          1. Quisque sodales leo{" "}
          <b>
            <u>vitae vulputate auctor.</u>
          </b>
          <br />
          2. Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra libero
          a pellentesque blandit.
          <br />
          3. Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.
          <br />
          4. Donec ultrices sapien
          <b> vitae leo venenatis ullamcorper.</b>
        </p>
      </div>
      <div className="home-page-image-waves"></div>
    </div>
  );
};

export default HomePage;
