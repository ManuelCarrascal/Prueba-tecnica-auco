import './ProyectoDeVida.css'

export function ProyectoDeVida() {
  const textoProyectosDeVida='Formar mis propias empresas dedicadas al desarrollo de software para brindar soluciones a problematicas, disfrutar del proceso de aprendizaje del mundo tecnologico que no para de crecer, aprender de los fracasos y gozarme cada cosa que hago y no arrepentirme de nada, siempre sacar tiempo para la familia o cosas fuera del trabajo, e incluso sacar adelante una fundacion junto a mi novia para darle un hogar a los animales de la calle.';
  return (
    <>
      <div className="contenedorProyectoDeVida" id='sec5'> 
      <p id='textoTituloProyectosDeVida'>Proyectos de vida</p>
      <p id='textoProyectosDeVida'>{textoProyectosDeVida}</p>
      </div>
    </>
  );
}
