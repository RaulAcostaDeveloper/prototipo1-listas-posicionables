import { aniadeElementoNuevo, dataListActual, indexActual } from "@/app/Datos/CRUD"
import { useEffect, useState } from "react";
import { NuevoElementoEnLista } from "./NuevoElementoEnLista/NuevoElementoEnLista";
import { MenuSelector } from "./NuevoElementoEnLista/MenuSelector";
import { ElementoEnLista } from "./ElementoEnLista";

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
            <p>Ejemplo de elementos</p>
            <br />
            { dataListActual.map ((elemento, index)=>
                <ElementoEnLista key = {index} elemento = { elemento }/>
            )}
            <br />
            <p>Comportamientos de la lista</p>
            { dataListActual.map ((elemento, index)=>
                <NuevoElementoEnLista 
                    key = {index} elemento = { elemento }
                    showMenuSelector = { showMenuSelector }
                    setShowMenuSelector = { setShowMenuSelector }/>
            )}
            <p>Comportamiento de algunos elementos</p>
                <a href="https://prototipo1-elementos-listas-posicionables.vercel.app/" target="_blank">Ir al proyecto</a>
        </div>
    )
}