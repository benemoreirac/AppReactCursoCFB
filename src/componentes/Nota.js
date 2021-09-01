import React from 'react'

export default function Nota(props){
    return (
        <div>
            <legend>Informe a Nota: {props.num}</legend>
            <input type="text" value={props.nota} onChange={(e)=>props.setNotas(e.target.value)}></input>
        </div>
    )
}