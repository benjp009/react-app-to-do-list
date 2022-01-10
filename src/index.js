import React from "react"
import ReactDOM from "react-dom"

//Component file
import TodoContainer from "./components/TodoContainer";

//Stylesheet
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
  , document.getElementById("root"));
