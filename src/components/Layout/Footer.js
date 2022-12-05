import React from "react";
import classes from "./Footer.module.css";

// Reuseble footer component
const Footer = () => {
  return (
    <div className={classes["shape-divider"]}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
          className={classes["shape-fill"]}
        ></path>
      </svg>
    </div>
  );
};

export default Footer;
