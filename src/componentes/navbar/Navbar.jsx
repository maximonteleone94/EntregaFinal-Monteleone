import React from 'react'
import './Navbar.css'
import NavbarItem from './NavbarItem'
import { CiShoppingCart } from "react-icons/ci";


const Navbar = (props) => {
// const NavbarLogo = "TAURUS";
  const items =[ 'Inicio','Nosotros','Productos','Contacto']  
  return (
    
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <p className="navbar-brand" >{props.navbarLogo}</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {items.map((texto) => (
          <NavbarItem key={texto} texto={texto} />
        ))}    <div>
    <h3><CiShoppingCart></CiShoppingCart></h3>
    </div>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar