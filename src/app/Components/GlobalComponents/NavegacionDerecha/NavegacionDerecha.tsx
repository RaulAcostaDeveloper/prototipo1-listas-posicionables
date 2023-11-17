import { aniadeElementoNuevo, dataListActual, indexActual } from "@/app/Datos/CRUD"
import { useEffect, useState } from "react";
import { ElementoEnLista } from "./ElementoEnLista";

let toggleRender = false;
export const NavegacionDerecha = (): JSX.Element => {
    const [ toggleForRender, setToggleForRender ] = useState(toggleRender);

    useEffect(()=>{
        document.addEventListener('renderRight', handleRender);
    },[]);

    const handleRender = () => {
        toggleRender = !toggleRender;
        setToggleForRender(toggleRender);
    }

    return (
        <div className="navegacionDerecha">
            <div className="containerActions">
                <button className="aniadirNuevoButton" onClick={ (()=> aniadeElementoNuevo()) }>
                    <img src="../icons/boton-agregar.png" alt="add button" />
                </button>
            </div>
            { dataListActual.map ((elemento, index)=>
                <ElementoEnLista key = {index} elemento = { elemento }/>
            )}

        </div>
    )
}