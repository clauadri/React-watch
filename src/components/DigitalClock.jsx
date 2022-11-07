import React, { useEffect, useState } from 'react'
import './DigitalClock.css'
const DigitalClock = () => {
    //definimos el useState para que nos setee la hora 
    const[clockState, setClockState] = useState();
    // useefect para recoger la hora local y que la ejecute cuando cargamos la pagina y cada 1 seg 
    useEffect(()=>{
        setInterval(()=>{
            const date = new Date();//definimos la constante par usarla debajo con la funcion
            // usamos  el set del use state para asignarle el valor a clockstate cada 1 seg
            setClockState(date.toLocaleTimeString())
        },1000);
    },[]);

  return (
    <div className='reloj-digital'>
        <h3>{clockState}</h3>
    </div>
  )
}

export default DigitalClock