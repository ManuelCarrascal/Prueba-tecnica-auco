import './Historia.css'

export function Historia() {
  const CONTENIDO_HISTORIA = 'Nací un 11 de diciembre del año 2002 en la cuidad de Ocaña Norte de Santader, A los 5 años de edad fue mi primer contacto con el mundo de las computadoras y desde esos años empece a fascinarme por la increible capacidad de los equipos de realizar tareas de la misma forma que una persona, a los 13 años empece a aprender pequeños conceptos de programacion con lo que encontraba en internet. Desde ese dia mi educacion ha sido de forma autodidacta, logrando hacerme paso incluso en el mundo del modelado 3D y de diseño grafico asi como la programacion y a dia de hoy eso sigue y se que seguira creciendo con el pasar de los dias.'
  return <div className="ContenedorHistoria" id='sec1'>
    <p id='tituloTextoHistoria'>Historia</p>
    <p id='textoHistoria'>{CONTENIDO_HISTORIA}</p>
  </div>;
}
