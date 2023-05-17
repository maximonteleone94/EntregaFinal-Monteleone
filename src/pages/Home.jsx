import React, { Fragment } from 'react'
import Item from '../componentes/Item'

const Home = () => {

  const items = [
    {
        id:"1",
        titulo:"Item 1",
        descripcion:"Shampoo",
        imagen:"src/Assets/shampo.webp",
        precio: "$1200",
        stock: "10"
    },
    {
        id:"2",
        titulo:"Item 2",
        descripcion:"Perfume",
        imagen:"src/assets/perfumes.webp",
        precio: "$650",
        stock: "10"
    },
    {
        id:"3",
        titulo:"Item 3",
        descripcion:"Cera De Carnauba",
        imagen: "src/assets/carnauba.webp" ,
        precio: "$1500",
        stock: "10"
    },
    {
        id:"4",
        titulo:"Item 4",
        descripcion:"APC",
        imagen:"src/assets/apc.webp",
        precio: "$1200",
        stock: "10"
    }
]


  return (
    <Fragment>
    <h1>Bienvenidos A Taurus Detailing Store</h1>
    <div className='d-flex my-5'>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
    </Fragment>
  )
}

export default Home