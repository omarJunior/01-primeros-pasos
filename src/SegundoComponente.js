import React from 'react'

export const SegundoComponente = () => {

    //const libros = ["Harry potter", "Juego de tronos", "Clean code",]
    const libros = []
  return (
    <div className='segundo-componente'>
        <h1>Listado de libros</h1>
        {
            libros.length > 0 ?
            (<ul>
            {
                libros.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))
            }
            </ul>)
            :
            (<p>No hay datos para mostrar</p>)
        }
       
    </div>
  )
}
