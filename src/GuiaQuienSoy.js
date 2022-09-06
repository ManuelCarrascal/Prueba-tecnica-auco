
export function QuienSoy(){
    const HISTORIA = "Historia";
  const SUEÑOS = "Sueños";
  const METAS = "Metas";
  const ESTUDIOS = "Estudios";
  const PROYECTODEVIDA = "Proyecto de vida";
    return <div className="contendorGuiaQuienSoy">
    <div className="contendorGeneralBotonesQuienSoy">
      <div className="contenedorBotonesQuienSoy">
        <a href="#sec1" className="botonQuienSoy" id="botonHistoria">{HISTORIA}</a>{" "}
      </div>
      <div className="contenedorBotonesQuienSoy">
        <a href="#sec2" className="botonQuienSoy" id="botonSueños">{SUEÑOS} </a>{" "}
      </div>
      <div className="contenedorBotonesQuienSoy">
        <a href="#sec3" className="botonQuienSoy" id="botonMetas">{METAS} </a>{" "}
      </div>
      <div className="contenedorBotonesQuienSoy">
        <a href="#sec4" className="botonQuienSoy" id="botonEstudios">{ESTUDIOS} </a>{" "}
      </div>
      <div className="contenedorBotonesQuienSoy">
        <button className="botonQuienSoy" id="botonProyecto">{PROYECTODEVIDA} </button>{" "}
      </div>
    </div>
  </div>
}