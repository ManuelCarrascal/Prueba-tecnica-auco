import './Estudios.css'
import Normal from './normal.jpg'
import Ufpso from './ufpso.jpg'

export function Estudios(){
    const NOMBRE_INSTITUCION_SECUNDARIA= 'Normal Superior Ocaña'
    const NOMBRE_INSTITUCION_UNIVERSITARIA= 'Universidad Francisco De Paula Santander Ocaña'
    return <div className="contenedorEstudios" id='sec4'>
            <div className='contenedorTituloEstudios'>
                <p id='tituloTextoEstudios'>Estudios</p>
            </div>
            <p className='subtituloTextoEstudios'>Secundaria</p>
            <div className='contenedorImagenEstudio'><img src={Normal} alt='Normal-Superior'></img></div>
            <p className='nombreInstitucion'>{NOMBRE_INSTITUCION_SECUNDARIA}</p>
            <p className='subtituloTextoEstudios'>Universidad</p>
            <div className='contenedorImagenEstudio'><img src={Ufpso} alt='Normal-Superior'></img></div>
            <p className='nombreInstitucion'>{NOMBRE_INSTITUCION_UNIVERSITARIA}</p>
            
    </div>
}