import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import imagen from '../Assets/shampo.webp'


const Item = (props) => {
  const {id,titulo,descripcion,precio,img} = props;
  const navigate = useNavigate()
  return (
    <div className='d-flex flex-column w-25 h-25 border border-dark mx-2'>
        {/* <h3 className='fs-5'>{titulo}</h3> */}
        <p className='fs-4 txt-t'>{descripcion}</p>        
        <img src={imagen} className="card-img-top"/>
        <p className='fs-5 txt-t'>{precio}</p>
        <Link to={`/item/${id}`} className='btn btn-outline-secondary' >Info</Link>
        <button className='btn btn-outline-danger' onClick={()=>navigate(`/item/${id}`)}>Comprar</button>
    </div>
  )
}

export default Item