import './Metas.css'

export function Metas() {
  const TEXTO_METAS = "Quiero trabajar para una empresa que mejore aspectos de la sociedad con el fin de facilitar tareas a sus usuarios. Tambien quiero con trabajo duro conseguir mi primer medio de transporte y una casa. Quiero devolverle a mis padres en algun momento todo lo que han hecho para que yo salga adelante, Asi como tambien ser inspiracion para otros que apenas estan empezando y que vean que si se es constante y se intentan las cosas tarde o temprano todo se logra.";
  return (
    <div className="contenedorMetas" id='sec3'>
      <p id='tituloTextoMetas'>Metas</p>
      <p id='textoMetas'>{TEXTO_METAS}</p>
    </div>
  );
}
