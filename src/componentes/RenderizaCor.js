import React, { useState } from 'react'

export default function RenderizaCor(){

  const [cor, setCor]=useState(1)
  const vermelho ={color:'#f00'}
  const verde={color:'#0f0'}
  const azul={color:'#00f'}

  const retornaCor =(c) =>{
    if (c==1){
      return vermelho
    } else if(c==2){
      return verde
    }else{
      return azul
    }
  }

  const mudaCor=()=>{
    setCor(cor+1)
    if(cor>2){
      setCor(1)
    }
  }

  setInterval(mudaCor,1000)

  return(
    <>
      <h1 style={retornaCor(cor)}>CFB Cursos</h1>
      <button onClick={()=>mudaCor()}>Mudar Cor</button>
    </> 
  )
}


/*
CFB - AULA 012 - Como usar renderização em REact
Colocar codigo abaixo em APP.js


import React from 'react'
import './App.css'
import RenderizaCor from './componentes/RenderizaCor'

export default function App(){

 
  return(
    <>
      <RenderizaCor/>
    </> 
  )
}



*/