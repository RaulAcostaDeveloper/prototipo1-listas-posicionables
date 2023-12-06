import { useState } from "react";
import { BotonAniadirElemento } from "./BotonAniadirElemento";
import { ElementoCantidad } from "./ElementoCantidad";
import { ElementoCheckbox } from "./ElementoCheckbox";
import { ElementoFecha } from "./ElementoFecha";
import { ElementoPrioridad } from "./ElementoPrioridad";
import { ElementoTexto } from "./ElementoTexto";
import { SelectorDeVista } from "./SelectorDeVista";
import { MenuSelector } from "./MenuSelector";

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
    showMenuSelector: boolean;
    setShowMenuSelector:(newValue: boolean) => void;
}
export const NuevoElementoEnLista = ({ elemento, showMenuSelector, setShowMenuSelector }: Props) => {
    const [vista, setVista] = useState(true);
    return (
        <div className="NuevoElementoEnLista">
            <SelectorDeVista 
                vista = { vista }
                setVista = { setVista}/>
            <div className="inner">
                { vista ?
                    <div className="elementos">
                        <ElementoTexto/>
                        <ElementoFecha/>
                        <ElementoCheckbox/>
                        <ElementoCantidad/>
                    </div>
                    :
                    <div className="elementos">
                        <ElementoPrioridad/>
                    </div> 
                }
                <BotonAniadirElemento 
                    showMenuSelector = { showMenuSelector }
                    setShowMenuSelector = { setShowMenuSelector }/>
            </div>

        </div>
    )
}