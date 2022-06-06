import React from 'react';
import { Menu } from '../Menu';

export default function CalculoFaC() {
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


  //suma function

  const convertir = function () {
    setResult((+datos.numero1-32)* 5/9+ 'Celsius');
  };
  return (

    <div>
      <Menu></Menu>
        <div className=' diseño '>
            <div className='contenido'>
                <h2>Convertidor de Fahrenheit a Celsius</h2>
                <h3>Escriba un numero en Fahrenheit:</h3>
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