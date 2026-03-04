import React from "react";
import "./socialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://github.com/sahillll0" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>

      <a href="https://www.instagram.com/sahillllll_00/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a href="https://www.linkedin.com/in/sahil-tippe-b20766284/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin-in"></i>
      </a>

      <a href="https://x.com/sahil_tippe" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-x-twitter"></i>
      </a>

      <a href="mailto:sahiltippe111@gmail.com">
        <i className="fa-solid fa-envelope"></i>
      </a>

      <a href="https://discord.com/users/yourid" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-discord"></i>
      </a>
    </div>
  );
};

export default SocialIcons;