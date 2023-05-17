import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import data from "../../data.json"
import imagen from '../Assets/shampo.webp'


const ItemDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const items = [
    {
        id:"1",
        titulo:"Item 1",
        descripcion:"Shampoo",
        Imagen:"src/Assets/shampo.webp",
        precio: "$1200",
        stock: "10"
    },
    {
        id:"2",
        titulo:"Item 2",
        descripcion:"Perfume",
        imagen:"src/Assets/perfumes.webp",
        precio: "$650",
        stock: "10"
    },
    {
        id:"3",
        titulo:"Item 3",
        descripcion:"Cera De Carnauba",
        imagen: "src/Assets/carnauba.webp" ,
        precio: "$1500",
        stock: "10"
    },
    {
        id:"4",
        titulo:"Item 4",
        descripcion:"APC",
        imagen:"src/Assets/apc.webp",
        precio: "$1200",
        stock: "10"
    }
]

  useEffect(() => {

    setTimeout(() => {
      const filter = items.find((item) => item.id === id);
      setItem(filter)
      setLoading(false)
    }, 2000);



  }, [] );

  const agregarAlCarrito = () => {
    // agarrar el item y guardar en el state del carrito 
    navigate('/checkout')
  }
 

  return (
    <Fragment>
      <button className="btn btn-outline-warning" onClick={() => navigate(-1)}>
        Volver
      </button>
      <hr />
      {loading && <h1>Cargando..</h1>}
      {item && !loading && (
        <div className="txt-t">
          <h1>{item.descripcion}</h1>
          {/* <h1>{item.titulo}</h1> */}
          <img src={imagen} width="" height="300px"/> 
          <h3>{item.precio}</h3>
          <p>Stock: {item.stock}</p>
          
          <button className="btn btn-outline-danger" onClick={agregarAlCarrito} >Comprar</button>
        </div>
      )}
    </Fragment>
  );
};

export default ItemDetail;
