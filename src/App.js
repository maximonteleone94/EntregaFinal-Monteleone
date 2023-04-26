import React from 'react'
// import Navbar from './componentes/navbar/Navbar'
import Container from './layout/Container'
// import Home from './pages/Home'
import Card from './componentes/Card/Card'


const App = () => {

const contenido = [
  {
    titulo:'Perfumes',
    descripcion:'',

  }
]
  return (
    <div className='App'>

         
    <Container>
      {/* <Home/> */}
      {/* <Navbar navbarLogo={"TAURUS"}/> */}
    </Container>

    {contenido.map((producto,index) => ( 
        <Card key={index} titulo={producto.titulo} descripcion={producto.descripcion} imagen={producto.imagen}/>
      ))}

    </div>
  )
}


export default App