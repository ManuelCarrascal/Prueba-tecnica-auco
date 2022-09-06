import { useEffect, useState } from "react";
import './preguntas.css'
export function Preguntas() {
  const [numbers, setNumbers] = useState([]);
  useEffect(()=>{
    printNumbers().then((result)=>{
        setNumbers(result);
    })
  },[])

  return (
    <div>
      <div>
        <p>
          Desarrolle un for que vaya de 1 a 10 de manera sincrona y otro de
          manera asíncrona, muestra los resultados, ¿estos salen en orden? ¿Por
          qué?
        </p>
        <div className="fores">
        <p>
          <span>RTA For sincrono:</span>
          {syncFor().map((number) => (
            <li key={number}>{number}</li>
          ))}
        </p>
        <p>
          <span>RTA For Asincrono:</span>
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </p>
        </div>
      
      </div>
      <hr />
      <div>
        <p>
          ¿Qué métodos de seguridad se pueden utilizar en los consumos de
          servicios rest?
        </p>
        <p>
          <span>RTA:</span> Aplicar mecanismos de criptografía en diferentes
          niveles,Proteger los métodos HTTP, Incorporar mecanismos de cifrado de
          datos confidenciales,Cifrar todos esos datos antes de almacenarlos,
          Integridad del mensaje usando JSON.
        </p>
      </div>
      <hr />
      <div>
        <p>
          Explique las diferencias entre las funciones sincronas y asíncronas
        </p>
        <p>
          <span>RTA: </span> Las funciones sincronas son aquellas que ejecutan
          codigo de forma secuancial, mientras que las funciones asincronas
          ejecutan codigo a destiempo sin importar el orden de ejecucion.
        </p>
      </div>
    </div>
  );
}
function syncFor() {
  const numbers = [];
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }
  return numbers;
}

const getNumber = (number) => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(number);
    }, Math.floor(Math.random() * 100));
  });
};

// En caso de usar un for Sincrono obtendremos el listado de numeros normalmente del 1 al 10, lo mismo ocurrira con el for asincrono siempre y cuando resolvamos la promesa mediante async/await.

// En caso de usar algún método de los arrays como forEach estos no funcionan bien con async/await por lo que obtendremos el listado de numeros en desorden.

const printNumbers = async () => {
  const result = [];
  for (let i = 1; i <= 10; i++) {
    const newNumber = await getNumber(i);
    result.push(newNumber);
  }

  return result;
};
