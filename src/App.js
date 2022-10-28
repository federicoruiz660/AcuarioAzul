import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";




function App() {
  return (
  
  <div>
    
    <NavBar></NavBar>
    <ItemListContainer  greeting="Hola, aca van a ir los productos a medida que se vayan agregando, muchas gracias por visitarnos."></ItemListContainer>


  </div>
  
  
  
  );}

export default App;
