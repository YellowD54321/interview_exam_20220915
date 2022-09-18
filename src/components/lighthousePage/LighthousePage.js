import React from "react";
import "./lighthousePage.css";

const LighthousePage = () => {
  return (
    <div className="lighthouse-page-main">
      <div className="lighthouse-page-text-region">
        <div className="lighthouse-page-text-number">13.32</div>
        <p className="lighthouse-page-text-description">
          who seeks after it and
          <br /> wants to have it
        </p>
      </div>
      <img
        src="./images/lighthouse.png"
        alt="light house"
        className="lighthouse-page-image"
      />
    </div>
  );
};

export default LighthousePage;
