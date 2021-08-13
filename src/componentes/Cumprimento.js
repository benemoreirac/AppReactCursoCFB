import React, {useState} from 'react'

export default function Cumpprimento(){
  const[log, setLog] =useState(false)
  const msgLogin=()=>{
    return 'Usuáriio Logado'
  }
  const msgLogoff=()=>{
    return 'Favor Logar'
  }

  const cumprimento=()=>{    
    const hora =new Date().getHours()    
    if(hora>=0 && hora < 13){
      return <p>Bom dia!</p>
    }else if(hora>=13 && hora<18){
      return <p>Boa tarde!</p>
    }else{
      return <p>Boa noite</p>
    }
  }

  return(
    <>
      <h1>CFB Cursos</h1>
      {cumprimento()}
      <p>{log?msgLogin():msgLogoff()}</p>
      <button onClick={()=>setLog(!log)}>{log?'Logoff':'Login'}</button>
    </> 
  )
}


/*
CFB - AULA 012 (parte1)- Como usar renderização em REact
Colocar codigo abaixo em APP.js

import React from 'react'
import './App.css'
import Cumprimento from './componentes/Cumprimento'

export default function App(){

 
  return(
    <>
      <Cumprimento/>
    </> 
  )
}


*/