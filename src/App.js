import React, { useState } from "react";
import MainPage from "./components/OpeningPage/MainPage";
import classes from "./App.module.css";
import MainRecipePage from "./components/Recipes/MainRecipePage";
import Footer from "./components/Layout/Footer";

function App() {
  const [formStatus, setFormStatus] = useState(false);
  const [recipeArr, setRecipeArr] = useState([]);

  // Getting recipe array from MainPage
  const getRecipes = (arr) => {
    setRecipeArr(arr);
  };

  // To display either MainPage or MainRecipePage
  const formStatusHandler = () => {
    setFormStatus(true);
  };

  // To activate the 'Go back to search button on the MainRecipePage
  const goBackBtnHandler = () => {
    setFormStatus(false);
  };

  return (
    <div className={classes.container}>
      {!formStatus && (
        <MainPage
          onGetRecipes={getRecipes}
          onFormSubmitted={formStatusHandler}
        />
      )}
      {formStatus && (
        <MainRecipePage recipes={recipeArr} onGoBackBtn={goBackBtnHandler} />
      )}
      <Footer />
    </div>
  );
}

export default App;
