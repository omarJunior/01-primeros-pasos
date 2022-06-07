import React,{Fragment} from 'react'

export const MiComponente = () => {

    let usuario = {
        nombre : "Victor",
        apellidos: "Robles",
        web: "victoroblesweb.com"
    }

    console.log(usuario)

  return (
        <div className='mi-componente'>
            <h2>Componente creado</h2>
            <h3>Datos del usuario</h3>
            <ul>
                <li><strong>{usuario.nombre}</strong></li>
                <li><strong>{usuario.apellidos}</strong></li>
                <li><strong>{usuario.web}</strong></li>
            </ul>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Django</li>
                <li>Node js</li>
            </ul>
        </div>
  )
}

