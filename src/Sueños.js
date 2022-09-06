  import './sueños.css'
  import HighPass from './highpass.png'
  import Familia from './familia.png'
  import Google from './google.png'
  export function Sueños(){
    const SUEÑOS='Siempre he soñado que por medio de las tecnologias podre ayudar a las personas a resolver sus problemas, hoy en dia me gustaria seguir adquiriendo conocimiento para desarrollar una aplicacion de microservicios y una plataforma musical para artistas locales, Aparte de querer ayudar en algo a la sociedad mi mayor sueño es formar una familia hermosa con mi novia y tener un lindo hogar y por ultimo que algun dia mi nombre y cara aparezcan en el buscador de google cuando busquen mi nombre.'
    return <div className='contenedorSueños' id='sec2'>
      <p id='tituloTextoSueños'>Sueños</p>
      <p id='textoSueños'>{SUEÑOS}</p>
      <div className='contenedorImagenesSueños'>
        <img className='imagenSueños' src={HighPass} alt='highPass'></img>
        <img className='imagenSueños'  src={Familia} alt='Familia'></img>
        <img className='imagenSueños'  src={Google} alt='google'></img>
      </div>
    </div>
 }