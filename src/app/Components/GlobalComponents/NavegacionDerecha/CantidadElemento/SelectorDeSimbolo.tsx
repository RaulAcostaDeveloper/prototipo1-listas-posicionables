import { useState } from "react";
const arrSimbolos = [
    '$', '€', ' ',
]
export const SelectorDeSimbolo = () => {
    const [posicionSimbolo, setPosicionSimbolo] = useState(0);
    const handleNextSimbol = () => {
        if (posicionSimbolo < arrSimbolos.length - 1) {
            setPosicionSimbolo(posicionSimbolo + 1); 
        } else {
            setPosicionSimbolo(0);            
        }
    }
    const handlePreviousSimbol = () => {
        if (posicionSimbolo === 0) {
            setPosicionSimbolo(arrSimbolos.length - 1); 
        } else {
            setPosicionSimbolo(posicionSimbolo - 1);            
        }
    }
    return (
        <div className="selectorDeSimbolo">
            <button className="selectorIzquierdo" onClick={ ()=>handlePreviousSimbol() }>
                <img src="../icons/flecha-izquierda.png" alt="" />
            </button>
            <div className="simbolo">
            { arrSimbolos[posicionSimbolo] }
            </div>
            <button className="selectorDerecho" onClick={ ()=>handleNextSimbol() }>
                <img src="../icons/flecha-derecha.png" alt="" />
            </button>
        </div>
    )
}