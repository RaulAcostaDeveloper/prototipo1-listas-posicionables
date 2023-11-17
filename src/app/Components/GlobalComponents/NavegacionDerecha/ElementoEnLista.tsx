import { CantidadElemento } from "./CantidadElemento/CantidadElemento";
import { CheckboxElemento } from "./Checkbox/CheckboxElemento";
import { FechaPrioridad } from "./Fecha/FechaPrioridad";
import { PrioridadElemento } from "./Prioridad/PrioridadElemento";
import { TituloElemento } from "./TituloElemento";

type ElementoIndividual = {
    titulo: string;
    prioridad: number;
    fecha: Date;
    esDate: boolean;
    cantidad: number;
    simboloCantidad: string;
}
type Props = {
    elemento: ElementoIndividual;
}
export const ElementoEnLista = ({ elemento }: Props) => {
    return (
        <div className="elementoEnLista">
            <TituloElemento/>
            <CantidadElemento/>
            <FechaPrioridad/>
            <CheckboxElemento/>
            <PrioridadElemento/>
        </div>
    )
}