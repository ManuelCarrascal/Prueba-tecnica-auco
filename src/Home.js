import "./Home.css";
import {QuienSoy} from './GuiaQuienSoy'
import "./antonioFont.css"
import {Historia} from './Historia'
import {Sueños} from './Sueños'
import {Metas} from './Metas'
import {Estudios} from './Estudios'
export function Home() {
  const SALUDO ="Hola!"
  const PEQUEÑAENTRADA="Soy Manuel Carrascal estudiante de ingenieria de sistemas de la Universidad Francisco De Paula Santander Ocaña. "
  return (
    <div className="contenedor">
    <div className="bienvenida">
      <div className="contenedorMensajePrincipal">
        <div><h1 id="tituloSaludo">{SALUDO}</h1></div>
        <div className="contenedorPequeñaEntrada"><p id="textoPequeñaEntrada">{PEQUEÑAENTRADA}</p></div>
      </div>
      <QuienSoy/>
    </div>
    <Historia/>
    <Sueños/>
    <Metas/>
    <Estudios/> 
    </div>
  );
}
