import React from 'react'
import ReactDOM from 'react-dom'

function App() {

  const resposta = document.querySelector('.res');
  function maisUm() {
    resposta.textContent = "voce apertou"
  }
  return (
    <div>
      <h1>Esse é o meu codigo</h1>
      <button onClick={maisUm}>Aperte aqui </button>
      <div className="res"></div>
    </div>
  )
}

export default App
