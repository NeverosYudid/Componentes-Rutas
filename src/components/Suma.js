import React from 'react';
import { Menu } from '../Menu';


export default function Suma() {
  const [datos, setDatos] = React.useState({
    num1: "",
    num2: "",
  });
  
  const [result, setResult] = React.useState();
  
  const Input = function (e) {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };


  //suma function

  const suma = function () {
    setResult((+datos.num1) + (+datos.num2));
  };
  return (

    <div >
      <Menu></Menu>
        <div className='diseño '>
            <div className='contenido'>
            <h2> Suma</h2>
                <h3>Escribe dos numeros: </h3>
                <div>
                    <input
                     onChange={Input}
                    name="num1"
                    value={datos.num1}
                    type="text"
                    ></input>
                    <input
                    onChange={Input}
                    name="num2"
                    value={datos.num2}
                    type="text"
                    ></input>
                </div>
            </div>
            <div className='button'>
                <button onClick={suma}>sumar</button>
            </div>
            <div> 
               El resultado es: {result} 
            </div>
            
        </div>
    </div>
  );
        
      

}