import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MovieProvider } from "./context/MovieContext";
import { PopularProvider } from "./context/PopularContext";
import { RatingProvider } from "./context/RatingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<RatingProvider>
  <PopularProvider>
    <MovieProvider>
      <App />
    </MovieProvider>
  </PopularProvider>
  </RatingProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
