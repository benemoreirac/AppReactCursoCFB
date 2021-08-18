import React from 'react'

export default function elementosCar(){

const carros = [
  {categoria: "Esporte", preco:"110000.00", modelo:"Golf"},
  {categoria: "Esporte", preco: "12000.00", modelo: "Camaro"},
  {categoria: "SUV", preco: "85000.00", modelo: "HRV"},
  {categoria: "SUV", preco: "83000.00", modelo: "T-Cross"},
  {categoria: "Utilitario", preco: "120000.00", modelo: "Hillux"},
  {categoria: "Utilitario", preco: "90000.00", modelo: "Ranger"}
];

  const listaCarros = carros.map(
    (car,i)=>
      <li key={i}>{i} - {car.categoria} - R${car.preco} -- {car.modelo}</li>
  )

  return(
    <>
      <h1>CFB Cursos</h1>
      <ul>{listaCarros}</ul>
    </> 
  )
}