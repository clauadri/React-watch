import React, { useEffect, useState } from 'react'
import './CuentaAtras.css'
const CuentaAtras = () => {
    const[time, setTime] = useState('');

    useEffect(()=>{
        let countDown = new Date('November 7, 2022 17:15:00').getTime();
        let x = setInterval(()=>{
            let now = new Date().getTime();
            let tiempoEntre = countDown - now;
            let days = Math.floor(tiempoEntre/(1000*24*60*60));
            let hours = Math.floor((tiempoEntre % (1000*24*60*60))/(1000*60*60));
            let minutes = Math.floor((tiempoEntre % (1000*60*60))/(1000*60));
            let seconds = Math.floor((tiempoEntre % (1000*60))/(1000));

            setTime(days + 'd' +  hours + 'h' +  minutes + 'm' +  seconds + 's');
            if(tiempoEntre < 0 ){
                clearInterval(x);
                setTime('Fin de la cuenta atras')
            }
        },1000);
    },[]);
  return (
    <div className='cuenta-atras'>
        <p>{time}</p>
    </div>
  )
}

export default CuentaAtras