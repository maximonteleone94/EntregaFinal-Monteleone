import React, { Fragment } from 'react'
// import Footer from '../componentes/Footer/Footer'
import Navbar from '../componentes/navbar/Navbar'

const Container = (props) => {
  return (
    <Fragment>
      <Navbar
      navbarLogo={"TAURUS"}/>
      {/* <Navbar
        items={['Inicio','Nosotros','Productos','Contacto']}/>
        navbarLogoCss={"text-danger"}
        navbarLogo={"Taurus"} */}
          {props.children}
        {/* <Footer/> */}
    </Fragment>
  )
}

export default Container