import React, { useState } from "react";
import Button from "../Layout/Button";
import Input from "./Input";
import classes from "./MainPage.module.css";
import Header from "./Text/Header";
import Instructions from "./Text/Instructions";
import Gif from "./Gif";
import Footer from "../Layout/Footer";
import ErrorModal from "../UI/ErrorModal";

const MainPage = (props) => {
  const app_id = "16ed844b";
  const app_key = "e00add38bc204d3c6e0e764df979a926";

  const [inputValue, setInputValue] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [inputError, setInputError] = useState({});
  const [errorState, setErrorState] = useState(false);

  //   Fetching api and getting the api data
  const getResponse = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${inputValue}&app_id=${app_id}&app_key=${app_key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    props.onGetRecipes(data.hits);
  };

  //   Getting the user's input
  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  //   Submitting the form, invoking the getResponse function
  //  and passing the fetched data to App.js
  const formHandler = (e) => {
    e.preventDefault();

    // Input validation
    if (inputValue === "") {
      setInputError({
        title: "Invalid input!",
        message: "Please specify at least one ingredient",
      });
      setErrorState(true);
      return;
      
    } else if (inputValue.match(/\d+/g)) {
      setInputError({
        title: "Invalid input!",
        message: "Please use letters to enter ingredients",
      });
      setErrorState(true);
      return;

    } else {
      getResponse();
      setInputValue("");
      props.onFormSubmitted(recipes);
      setErrorState(false);
    }
  };

  // Resetting the errorState to 'true' on the "OK" modal button click
  const closeErrModal = () => {
    setErrorState(false);
  };

  return (
    <div className={classes["main-container"]}>
      {errorState && (
        <ErrorModal inputError={inputError} closeModal={closeErrModal} />
      )}
      <div className={classes.container}>
        <Header />
        <form className={classes.form} onSubmit={formHandler}>
          <Input onChange={inputValueHandler} value={inputValue} />
          <Button title="Search" className={classes.button} />
        </form>
        <Instructions />
        <Gif />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
