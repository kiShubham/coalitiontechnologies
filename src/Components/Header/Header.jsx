import styles from "./Header.module.css";
import logo from "../../assets/lam-logo.png";
import logoText from "../../assets/lam-logo-text.png";

import React from "react";

const Header = ({ logoTxt = true }) => {
  return (
    <div
      className={styles.header}
      style={logoTxt ? null : { background: "white" }}
    >
      <div className={styles.child1}>
        <img src={logo} alt="logo" />
        {logoTxt ? (
          <></>
        ) : (
          <>
            <img src={logoText} alt="losAngeles Mountains" />
          </>
        )}
      </div>
      <div className={styles.child2}>
        <button style={logoTxt ? null : { color: "#1e40af" }}>
          01.History
        </button>
        <button style={logoTxt ? null : { color: "#1e40af" }}>02.Team</button>
      </div>
    </div>
  );
};

export default Header;
