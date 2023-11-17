import { Cantidad } from "./Cantidad"
import { SelectorDeSimbolo } from "./SelectorDeSimbolo"

export const CantidadElemento = () => {
    return (
        <div className="cantidadElemento">
            <SelectorDeSimbolo/>
            <Cantidad/>
        </div>
    )
}