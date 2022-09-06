import "./NavBar.css";
import "./homenajeFont.css";


export function NavBar() {
  const HOME = "Home";
  const LISTA = "Lista";
  const PREGUNTAS = "Preguntas";
  return (
    <nav className="barraNavegacion">
      <div className="contenedorNavbarLogo">
        <p id="navbarLogoText">
          Manuel <span id="rayaAlPisoLogo">_</span> Carrascal
        </p>
      </div>
      <div className="menuOpcionesNavegacion">
        <div>
          <a href="#" onClick={()=>{

          }} className="textoMenuOpciones">{HOME}</a>
        </div>
        <div>
          <a href="#10" className="textoMenuOpciones">{LISTA}</a>
        </div>
        <div>
          <a href="#14" className="textoMenuOpciones">{PREGUNTAS}</a>
        </div>
      </div>
    </nav>
  );
}
