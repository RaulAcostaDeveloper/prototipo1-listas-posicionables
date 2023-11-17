import { useState } from "react";
import { BotonAniadirLista } from "./BotonAniadirLista";
import { InputAniadirIzquierda } from "./InputAniadirIzquierda";

type Props = {
    isSelected: boolean;
}

export const ElementoAniadirLista = ({ isSelected }: Props) => {
    const [ nuevoTitulo, setNuevoTitulo ] = useState('');
    return (
        <div className="ElementoAniadirLista">
            <BotonAniadirLista nuevoTitulo = { nuevoTitulo } setNuevoTitulo = { setNuevoTitulo }/>
            { isSelected && 
                <InputAniadirIzquierda nuevoTitulo = { nuevoTitulo } setNuevoTitulo = { setNuevoTitulo }/>
            }
        </div>
    )
}