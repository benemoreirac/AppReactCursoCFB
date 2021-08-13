import React from 'react'
import LedVerde from './imgs/led_verde.png'
import LedVermelho from './imgs/led_vermelho.png'

export default function Led(props){

  return(
    <>
      <h1>CFB Cursos</h1>
      <img style={{width:'50px'}} src={props.ligado?LedVerde:LedVermelho}></img>
      <button onClick={()=>props.setLigado(!props.ligado)}>
        {props.ligado?'Desligar':'Ligar'}
      </button>
    </> 
  )
}

/*
CFB- CRUSOS - PARA COLOCAR NO APP.JS
AULA 011- EVENTOS EM REACTJS

import React, {useState} from 'react'
import './App.css'
import Led from './componentes/Led'

export default function App(){
  
  const [ligado, setLigado] = useState(false)
  
  const cancelar=(obj)=>{
    return obj.preventDefault()
  }

  return(
    <>
        <Led ligado={ligado} setLigado={setLigado}></Led>
        <a 
          href='http://www.google.com.br' 
          target='_blank'
          onClick={(e)=>cancelar(e)}
        >
          CFB Cursos
        </a>
    </> 
  )
}




*/