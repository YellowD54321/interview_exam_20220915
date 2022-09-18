import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-page-main">
      <div className="footer-page-background"></div>
      <div className="footer-page-text">
        Neque porro quisquam
        <br />
        est qui dolorem!
      </div>
      <img
        src="./images/market.png"
        alt="market"
        className="footer-page-market-image"
      />
    </div>
  );
};

export default Footer;
