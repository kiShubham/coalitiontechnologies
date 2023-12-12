import React from "react";
import styles from "./Footer.module.css";
import footerLogo from "../../assets/lam-footer-logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <img src={footerLogo} alt="logo" />
      </div>
      <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
