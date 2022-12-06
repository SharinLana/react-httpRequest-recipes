import React from "react";
import cookingIcon from "../../assets/cooking.gif";
import classes from './Gif.module.css';

// Static gif component
const Gif = () => {
  return (
    <div>
      <img src={cookingIcon} alt="Carrot cutting" className={classes.icon}/>
    </div>
  );
};

export default Gif;
