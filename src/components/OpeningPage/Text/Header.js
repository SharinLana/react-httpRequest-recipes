import React from "react";
import classes from "./Header.module.css";

// Static header component
const Header = () => {
  return (
    <>
      <h2 className={classes.header}>RECIPE</h2>
      <p className={classes.finder}>Finder</p>
    </>
  );
};

export default Header;
