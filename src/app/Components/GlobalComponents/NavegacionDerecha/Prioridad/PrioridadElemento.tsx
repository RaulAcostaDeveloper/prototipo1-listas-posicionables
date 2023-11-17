import { useState } from "react";
import { CambiadorDePrioridad } from "./CambiadorDePrioridad"

export const PrioridadElemento = () => {
    const [prioridad, setPrioridad] = useState(0);

    return (
        <div className="prioridadElemento">
            { prioridad }
            <CambiadorDePrioridad prioridad = { prioridad } setPrioridad = { setPrioridad }/>
        </div>
    )
}