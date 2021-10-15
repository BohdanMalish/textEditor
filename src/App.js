import React, { useEffect, createRef } from "react";
import "./App.css";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import ProductPage from "./components/ProductsPage";
import Header from "./components/Header";
const App = () => {
  const lst=[1,23,4,5,6];
  return(
  <div>
    <Header></Header>
    <ProductPage></ProductPage></div>
  );
};
export default App;
