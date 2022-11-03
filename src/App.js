import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter} from "react-router-dom";
import Main from "./components/Main";




function App() {
  return (
  
  <BrowserRouter>
    
    <NavBar></NavBar>
    <Main />
  </BrowserRouter>
  
  );}

export default App;
