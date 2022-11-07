import React, { useEffect, useState } from 'react'
import './Cronometro.css'

const Cronometro = () => {

    const [time, setTime] = useState(0);// empezara en 0 
    // otro use state para enceder y apagar el cronometro
    const [cronoOn, setCronoOn] = useState(false);


    useEffect(()=>{
        // cada vez que activemo el crono que el cronoon empiece a contar
        let interval = null; // la inicializamos en null para que no tenga valor
        if(cronoOn){// si esta on 
            interval = setInterval(()=>{
                setTime((prevTime) => prevTime + 10)// nos almacena el valor del tiempo cada 10 ms
            },10);

        }else{
            clearInterval(interval);
        }
        return()=>clearInterval(interval)
    },[cronoOn])



  return (
    <div className='crono'>
        <p>{time}</p>
        {/* los minutos entre 60000 porque son ms y el modulo sobrante % para
         dividir en porciones en este caso 60 para ser los seg de un min
         y el slice para que una vez tengamos el valor max de 2 cifras ocultar el exceso 
         */}
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
         <p></p>
        {!cronoOn && time === 0 && (<button onClick={()=>setCronoOn(true)}>Start</button>)}
        {cronoOn &&<button onClick={()=>setCronoOn(false)}>Stop</button>}
        {!cronoOn && time > 0 && (<button onClick={()=>setCronoOn(true)}>REsume</button>)}
        {!cronoOn && time >0 &&(<button onClick={()=>setTime(0)}>Reset</button>)}
    </div>
  )
}

export default Cronometro