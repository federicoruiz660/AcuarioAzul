import React from 'react';
import './Style.css';
import CartWidget from './CartWidget';
import {NavLink, Link} from "react-router-dom";



const NavBar = () => {
  return (
<header id="main-header" className="header">
    
    
    
    
        
    
        <nav>
        <Link to=""><h1>Acuario Azul</h1></Link>
        <Link to="">Inicio</Link>
        <NavLink to="/category/aguatropical">Agua Tropical</NavLink>
        <NavLink to="/category/aguamarina">Agua Marina</NavLink>
        

        </nav>

        
        <div id='contenedorlogo'><CartWidget></CartWidget></div>
        
        
        
        
</header>
  )
}


export default NavBar

