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