import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Harry potter", "Juego de tronos", "Clean code",]

  return (
    <div className='segundo-componente'>
        <h1>Listado de libros</h1>
        <ul>
           {
               libros.map((item, index)=>(
                   <li key={index}>{item}</li>
               ))
           }
        </ul>
    </div>
  )
}
