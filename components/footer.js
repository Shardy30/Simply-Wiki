import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <h3 id="footer-text" className="footer-copyright">
        © SimplyWiki {new Date().getFullYear()}
      </h3>
      <p className="footer-links">
        <a href="https://github.com/Shardy30/Simply-Wiki">Github</a> |{" "}
        <a href="https://shardy30.vercel.app/">Contact</a>
      </p>
    </footer>
  );
};

export default Footer;
