import React, {useState} from 'react';
import { Menu } from '../Menu';

export default function Formulario(){
    const [form, setForm] = useState({
        nombre:"",
        telefono:"",
        email:"",

    });


    const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const guardar= () =>{
        alert("El formulario se ha enviado a la consola");
        console.log(form);
    };

    return(
        <div>
            <Menu></Menu>
            <div className='formulario'>
            <h2>Formulario</h2>
            <label >Nombre</label>
                <p><input type="text" placeholder="......" name="nombre" value={form.nombre} onChange ={handleChange}
                /></p>
             <label >Telefono</label>
                <p><input type="text" placeholder="......" name="telefono" value={form.telefono} onChange ={handleChange}
                /></p>
            <label >Email</label>
                <p><input type="text" placeholder="......" name="email" value={form.email} onChange ={handleChange}
                /></p>
                <button onClick={guardar}> Enviar</button>
             </div>
            
        </div>
    )
    
}


