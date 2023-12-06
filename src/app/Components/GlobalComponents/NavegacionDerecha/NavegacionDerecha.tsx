import { aniadeElementoNuevo, dataListActual, indexActual } from "@/app/Datos/CRUD"
import { useEffect, useState } from "react";
import { NuevoElementoEnLista } from "./NuevoElementoEnLista/NuevoElementoEnLista";
import { MenuSelector } from "./NuevoElementoEnLista/MenuSelector";

let toggleRender = false;
export const NavegacionDerecha = (): JSX.Element => {
    const [ toggleForRender, setToggleForRender ] = useState(toggleRender);
    const [showMenuSelector, setShowMenuSelector] = useState(false);
    useEffect(()=>{
        document.addEventListener('renderRight', handleRender);
    },[]);

    const handleRender = () => {
        toggleRender = !toggleRender;
        setToggleForRender(toggleRender);
    }

    const handleOpenMenuSelector = () => {
        setShowMenuSelector(true);
    }

    return (
        <div className="navegacionDerecha">
            <div className="containerActions">
                <button className="aniadirNuevoButton" onClick={ (()=> aniadeElementoNuevo()) }>
                    <img src="../icons/boton-agregar.png" alt="add button" />
                </button>
            </div>
            { showMenuSelector &&
                    <MenuSelector
                        setShowMenuSelector = { setShowMenuSelector }/>
                }
            { dataListActual.map ((elemento, index)=>
                <NuevoElementoEnLista 
                    key = {index} elemento = { elemento }
                    showMenuSelector = { showMenuSelector }
                    setShowMenuSelector = { setShowMenuSelector }/>
            )}

        </div>
    )
}