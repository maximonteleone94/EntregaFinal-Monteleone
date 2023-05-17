// // import React, { Fragment } from 'react'
// // import Navbar from './componentes/navbar/Navbar'
// // import Container from './layout/Container'
// // import Home from './pages/Home'
// // import Card from './componentes/Card/Card'
// // import ItemCount from './componentes/IntemCount'
// // import Contador from './componentes/Contador/Contador'


// const App = () => {

// const contenido = [
//   {
//     titulo:'Perfumes',
//     descripcion:'',

//   }
// ]
//   return (
//     <div className='App'>

         
//     <Container>
//       {/* <Home/> */}
//       {/* <Navbar navbarLogo={"TAURUS"}/> */}
//     </Container>

//     {contenido.map((producto,index) => ( 
//         <Card key={index} titulo={producto.titulo} descripcion={producto.descripcion} imagen={producto.imagen}/>
//       ))}
//     </div>
//   )
// }


// export default App
import './App.css';
import Card from './componentes/Card/Card';
import Rutas from './componentes/routes/Rutas';


function App() {
  return (
    <div className="App">
      
      <Rutas/>
      {/* <Card/> */}
      
    </div>
  );
}

export default App;
