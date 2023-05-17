import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import {CgMenuBoxed} from 'react-icons/cg';
import logo from "../../Assets/LogoTaurus.jpg"
import { BsCart } from "react-icons/bs";

const Navbar = (props) => {
  const {navbar_items} = props  

  return (
    
  <nav className=" navbar-expand-lg bg-black txt-t fs-5">
  <div className="container-fluid">
    <a href="">
        <img src={logo} alt='logo' width="" height=""/> 
    </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <CgMenuBoxed className='txt-t'/>
      </button>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      {
        navbar_items.map(({path,name},index) => (
          <li key={index} className="nav-item">
            <NavLink className={'nav-link txt-t'} to={path}>{name}</NavLink>
          </li>
          
        ))
      }
      <div>
<a href="">
<h3 class="text-light" ><BsCart/></h3>
</a>
      </div>
        </ul>
      </div>
  </div>
</nav>
  )
}

export default Navbar