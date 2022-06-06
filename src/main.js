import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Suma from "./components/Suma";
import App from "./App";
import CalculoCaF from "./components/CalculoCaF";
import CalculoFaC from "./components/CalculoFaC";
import Multiplicacion from "./components/Multiplicacion";
import Formulario from "./components/Formulario";

export default function Main(){
    return(
        <Router>
            <Routes>
                
                <Route extract path="/" element={<App/>}/>
                <Route extract path="/Suma" element={<Suma/>} />
                <Route extract path="/Multiplicacion" element={<Multiplicacion/>} />
                <Route extract path="/CalculoCaF" element={<CalculoCaF/>} />
                <Route extract path="/CalculoFaC" element={<CalculoFaC/>} />
                <Route extract path="/Formulario" element={<Formulario/>} />
            </Routes>
        </Router>
    )

}



