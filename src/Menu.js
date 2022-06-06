import { Link } from "react-router-dom";

export function Menu(){
    return(
        <div className="bodymenu">
            <li className=" menu">
                <lu><Link to='/'>Inicio</Link>    </lu> 
                <lu><Link to='/Suma'>Suma</Link>    </lu>
                <lu><Link to='/Multiplicacion'>Multiplicación</Link>    </lu>
                <lu><Link to='/CalculoCaF'>Convertir C a F</Link>     </lu>
                <lu><Link to='/CalculoFaC'> Convertidor F a C</Link>     </lu>
                <lu><Link to='/Formulario'>Formulario</Link>      </lu>
            </li>
            
        </div>
    )
}