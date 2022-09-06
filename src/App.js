import React, { useState } from "react";
import './NavBar.css'
import "./homenajeFont.css";

import { Home } from "./Home";
import { NavBar } from "./NavBar";
import { Preguntas } from "./Preguntas";
import { Lista   } from "./Lista";
export const App = () => {
  const [page, setPage] = useState("home");
  const HOME = "Home";
  const LISTA = "Lista";
  const PREGUNTAS = "Preguntas";
  const getContent = () => {
    if (page === "home") {
      return (
        <>
           <Home />
        </>
      );
    } else if (page === "preguntas") {
      return (
        <>
          
          <Preguntas />
        </>
      );
    }else{
        return (<>
        <Lista/>
        </>)
    }
  };

  const toPage = page => event =>{
    event.preventDefault()
    window.history.pushState(null,'',`/${page}`);
    setPage(page)
  }
  return (
    <>
      <nav className="barraNavegacion">
        <div className="contenedorNavbarLogo">
          <p id="navbarLogoText">
            Manuel <span id="rayaAlPisoLogo">_</span> Carrascal
          </p>
        </div>
        <div className="menuOpcionesNavegacion">
          <div>
            <a href="/" onClick={toPage('home')} className="textoMenuOpciones">
              {HOME}
            </a>
          </div>
          <div>
            <a href="lista" onClick={toPage('lista')} className="textoMenuOpciones">
              {LISTA}
            </a>
          </div>
          <div>
            <a href="preguntas" onClick={toPage('preguntas')} className="textoMenuOpciones">
              {PREGUNTAS}
            </a>
          </div>
        </div>
      </nav>
      {getContent()}
    </>
  );
};
