import React, {useState} from 'react' 
import Nota from './Nota'
import Resultado from './Resultado'

export default function ElevaState(){
    const [notas, setNotas] = useState({"nota1":"0","nota2":"0","nota3":"0","nota4":"0"})
    const handleSetNotas = (e)=>{
        if(e.target.getAttribute('nota')=='nota1'){
            setNotas({"nota1":e.target.value,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":notas.nota4})
        } else if(e.target.getAttribute('nota')=='nota4'){
            setNotas({"nota1":notas.nota1,"nota2":e.target.value,"nota3":notas.nota3,"nota4":notas.nota4})
        }else if(e.target.getAttribute('nota')=='nota4'){
            setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":e.target.value,"nota4":notas.nota4})
        }else if(e.target.getAttribute('nota')=='nota4'){
            setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":e.target.value})
        }
    }

    return (
        <>
            <Nota num={1} nota={notas.nota1} setNotas={handleSetNotas}/>
            <Nota num={2} nota={notas.nota2} setNotas={handleSetNotas}/>
            <Nota num={3} nota={notas.nota3} setNotas={handleSetNotas}/>
            <Nota num={4} nota={notas.nota4} setNotas={handleSetNotas}/>

            <Resultado somaNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>      
        </>
    )
}