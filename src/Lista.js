import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Lista.css";
export function Lista() {
  const [usuarios, setUsuarios] = useState([]);
  const nextPage= () =>{
    axios.get("https://reqres.in/api/users?page=2").then((respuesta) => {
      const data = respuesta.data;
      setUsuarios(data.data);
    });
  }
  const prevPage= () =>{
    axios.get("https://reqres.in/api/users?page=1").then((respuesta) => {
      const data = respuesta.data;
      setUsuarios(data.data);
    });
  }
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((respuesta) => {
      const data = respuesta.data;
      setUsuarios(data.data);
    });
  }, []);

  return (
    <>
      <div className="contendorListas">
        {usuarios.map((v) => (
          <div className="contenedorUsuario">
            <div className="contenedorImagenUsuario">
              <img className="imgUsuario" src={v.avatar} alt="usuario"></img>
            </div>
            <div className="contendorDatosUsuario">
              <p className="nombreUsuario">
                {v.first_name}{" "}
                <span className="nombreUsuario">{v.last_name}</span>
              </p>
              <p className="correoUsuario"> {v.email}</p>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="contenedorBoton">
        <button onClick={prevPage} className="botonPaginacion">
          anterior
        </button>
        <button onClick={nextPage} className="botonPaginacion">
          siguiente
        </button>
      </div>
    </>
  );
}
