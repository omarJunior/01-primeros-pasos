import React from 'react'

export const EventosComponentes = (e) => {

    const handleClick = (e, nombre)=>{
        console.log(e)
        console.log(e.timeStamp)
        console.log(e.target)
        console.log(nombre)

    }
    function handleDoubleClick(e,nombre){
        console.log(e)
        console.log(e.timeStamp)
        console.log(e.target)
        console.log(nombre)
    }

    const hasEntrado = (e, accion)=>{
        console.log("Has " + accion + " a la caja con el mouse")
    }

    const hasSalido = (e, accion)=>{
        console.log("Has " + accion + " a la caja con el mouse")
    }

    const estasDentro = (e)=>{
        console.warn("Estas dentro del input")
    }

    const estasFuera = (e)=>{
        console.warn("Estas fuera")
    }

  return (
    <div>
        <h1>Eventos en react</h1>
        <p>
            {/* Evento click */}
            <button onClick={(e) => handleClick(e, "omar")}>dame click!</button>
        </p>
       
        <p>
            {/* Evento doble click */}
            <button onDoubleClick={(e) => handleDoubleClick(e, "omar")}>dame doble click!</button>
        </p>

        <div id="caja" 
            onMouseEnter={()=> hasEntrado(e, "entrado")}
            onMouseLeave={()=> hasSalido(e, "salido")}
            >
            {/* Evento mouse enter y leave */}
            Pasa por encima
        </div>

        {/* Evento focus y blur */}
        <p>
            <input 
                type="text" 
                onFocus={estasDentro} 
                onBlur={estasFuera} 
                placeholder="Introduce tu nombre..."/>
        </p>
       
    </div>
  )
}
