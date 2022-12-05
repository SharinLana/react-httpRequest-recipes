import React from "react";
import classes from "./ErrModal.module.css";
import Button from "../Layout/Button";

const ErrorModal = (props) => {
  // Getting the values of the inputError object from MainPage
  // to display in the modal
  const error = props.inputError;

  return (
    <div className={classes.backdrop} onClick={props.closeModal}>
      <div className={classes.modal}>
        <h2 className={classes["modal-header"]}>{error.title}</h2>
        <hr className={classes.hr} />
        <p className={classes.text}>{error.message}</p>
        <Button
          title="OK"
          className={classes.okBtn}
          onClick={props.closeModal}
        />
      </div>
    </div>
  );
};

export default ErrorModal;
