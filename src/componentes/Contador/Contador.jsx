import {useState,useEffect,useRef} from 'react'

const Contador = (props) => {

    const {initialValue} = props

    const [numero,setNumero] = useState(initialValue || 0)
    const [limitado, setLimitado] = useState(false)

    const titleDivRef = useRef('')
    


    useEffect(() => {
        console.log('Se consulto el Valor del numero')
        if(numero >= 10){
            setLimitado(true)
        }
    
      return () => {
        setLimitado(false)
        //setNumero(0)
      }
    }, [numero])
    

     const sumar = () => {
        setNumero(numero + 1)
     } 
    const restar = () => {
        setNumero(numero - 1)
    }

     const resetear = () => {
        setNumero(0)
     }


  return (
    <div className={ ` ${limitado ? 'bg-danger' : ''} 'd-flex justify-around'` }>
        <div ref={titleDivRef}></div>
                <div>
            <button onClick={restar}>Restar</button>
        </div>
            <h3 className='text-center'>Numero actual es : {numero} </h3>
            {props.greeting}
        <div>
            <button disabled={limitado} onClick={sumar}>Sumar</button>
        </div>
        <div>
            <button onClick={resetear}>Resetear</button>
        </div>
    </div>
  )
}

export default Contador