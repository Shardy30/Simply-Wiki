import React from "react";

const Footer = () => {
  return (
    <footer class="footer-container">
      <h3 id="footer-text" class="footer-copyright">
        © SimplyWiki {(new Date()).getFullYear()}
      </h3>
      <p class="footer-links">
        <a href="https://github.com/Shardy30/Simply-Wiki">Github</a> |{" "}
        <a href="https://shardy30.netlify.app/">Contact</a>
      </p>
    </footer>
  );
};

export default Footer;
