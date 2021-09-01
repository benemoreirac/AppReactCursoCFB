import React, {useState} from 'react'

export default function ManipulaForm(){

    const [nome,setNome]=useState('')
    const [carro,setCarro]=useState('')

    return(
        <>
            <label>Digite seu Nome: </label>
            <input type="text" name="fnome" value={nome} onChange={(e)=>setNome(e.target.value)}></input>
            <p>Nome digitado: {nome}</p>

            <label>Selecione um carro</label>

            <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
                <option value="HRV">HRV</option>
                <option value="Golf">GOLF</option>
                <option value="Cruze">CRUZE</option>
                <option value="Argo">ARGO</option>
            </select>
            <p>carro Selecionado: {carro}</p>
        </>
    )

}

/* CONTEUDO AULA 014 - Manipulando elementos de formulário com React - Curso de React
PARA USAR NO APP>JS

import React from 'react'
import './App.css'
import ManipulaForm from './componentes/ManipulaForm'


export default function App(){

  return(
    <>
      <ManipulaForm/>
    </> 
  )
}



*/