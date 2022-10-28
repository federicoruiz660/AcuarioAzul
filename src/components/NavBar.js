import React from 'react';
import './Style.css';
import CartWidget from './CartWidget';



const NavBar = () => {
  return (
<header id="main-header" className="header">
    <h1>Acuario Azul</h1>
        
        <div id='contenedorlista'>
        <ul className='Categorias'>
        <li><a href="#">Peces tropicales</a></li>
        <li><a href="#">Peces de agua fria</a></li>
        <li><a href="#">Peces Marinos</a></li>
        </ul>
        </div>
        
        <div id='contenedorlogo'><CartWidget></CartWidget></div>
        
        
        
        
</header>
  )
}


export default NavBar

