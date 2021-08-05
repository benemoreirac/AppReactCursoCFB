import React from 'react'
import Logo from './componentes/imgs/logo.png'
import Eu from './componentes/imgs/homem.png'

export default function App(){
  const canal = ()=>{
    return('CFB Crusos')
  }

  function curso(){
    return 'Curso de React'
  }

  return(
    <section>
      <header>
        <p>{'Canal: ' + canal()}</p>
        <p>{curso()}</p>
      </header>
      <section>
        <img src="{Logo}"></img>
        <img src="{Eu}"></img>
      </section>
    </section>
  )
}