import React from 'react';
import { Menu } from '../Menu';

export default function CalculoCaF() {
  const [datos, setDatos] = React.useState({
    numero1:"",
  });
  
  const [result, setResult] = React.useState();
  
  const Input = function (e) {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };




  const convertir = function () {
    setResult((+datos.numero1*9/5)+ 32 +'Fahrenheit');
  };
  return (

    <div>
      <Menu></Menu>
        <div className='diseño '>
            <div className='contenido'>
                <h2>Convertidor de Celsius Fahrenheit</h2>
                <h3>Escriba un numero en Celsius:</h3>
                <div>
                    <input
                     onChange={Input}
                    name="numero1"
                    value={datos.numero1}
                    type="text"
                    ></input>
                </div>
            </div>
            <div className='button'>
                <button onClick={convertir}>convertir</button>
            </div>
            <div> 
               El resultado es: {result} 
            </div>
            
        </div>
    </div>
  );
        
      

}