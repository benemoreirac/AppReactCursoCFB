import React from 'react'
import Dados from './Dados'

export default function Corpo(){

    const cnl=()=>{
        return 'CFB Crusos'
    }
    const yt='youtube.com/cfbvursos'
    const crs= 'ReactJS'

    const somar=(v1, v2)=>{
        return v1+v2
    }

    return(
        <section>
            <h2>Curso de React</h2>
            <p>Se inscreva em noso canal</p>
            <p>Ative o soninho e clique no joinha</p>
            <Dados canal={cnl} youtube={yt} curso={crs} somar={somar}/>
        </section>
    )
}