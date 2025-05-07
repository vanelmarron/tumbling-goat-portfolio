import { Link } from "react-router-dom";
import React from "react";
import "./Footer.scss";

import logo from "../../assets/logos/main-logo.png";
import instagramIcon from "../../assets/icons/instagram.svg";
import mailIcon from "../../assets/icons/mail_24.svg";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Tumbling Goat Logo" className="footer__logo" />
      <div className="footer__social">
          <p className="footer__social-title">Follow us:</p>
          <div className="footer__links">
            <Link to="mailto:tumblinggoatpottery@gmail.com">
            <img src={mailIcon} alt="Email us" className="footer__email" />
            </Link>
            <Link to="https://www.instagram.com/tumblinggoatpottery/" target="_blank">
            <img
              src={instagramIcon}
              alt="Find us on Instagram"
              className="footer__instagram"
            />
            </Link>
          </div>
          </div>
    </footer>
  )
}

export default Footer;
