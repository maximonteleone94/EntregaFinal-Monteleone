import React from 'react'
import perfumes from '../../assets/perfumes.webp'


const Card = (props) => {
    const {titulo,descripcion,imagen} = props;
  return (
    <div className="card border border-black border-1 text-center" style={{width:'18rem'}}>
    <img src={ perfumes } className="card-img-top" alt="perfumes"/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{descripcion}</p>
      <button className="btn btn-danger">Comprar</button>
    </div>
  </div>
  )
}

export default Card