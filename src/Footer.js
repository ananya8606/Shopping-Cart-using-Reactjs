import React from "react";
import './Footer.css';
const Footer = props => {
  return (
    <div className="footer">
      <p className="footer-links">
        <a
          href="https://github.com/ananya8606/Shopping-Cart-using-React"  target="_blank"  rel="noreferrer">
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:ananyaiiitr@gmail.com" target="_blank" rel="noreferrer">
          Need any help?
        </a>
        <span>/</span>
        <a href="https://www.linkedin.com/in/ananya-gupta-b5421b173" target="_blank"  rel="noreferrer">
          Say Hi on linkedin
        </a>
        <span>/</span>
        <a href="https://www.facebook.com/profile.php?id=100021916785704" target="_blank"   rel="noreferrer">
          Join me on Facebook
        </a>
      </p>
      <p>
       <div id="font"> &copy; 2021 Copyright Ananya Gupta <br></br></div><div id ="h"><strong >ShopCart</strong> - Organic Green Store</div>
      </p>
    </div>
  );
};

export default Footer;