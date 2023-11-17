import { handleEditTitleOnListaSimple } from "@/app/Datos/CRUD";
import { useState } from "react";

type Props = {
    titulo: string;
    index: number;
}
export const TituloElementoLista = ({ titulo, index }: Props) => {
    const [ value, setValue ] = useState(titulo);
    
    return (
        <div className="tituloElementoLista">
            <input type="text" placeholder={ `${titulo? titulo : 'Añadir título'}`} onChange={ (e) => setValue(e.target.value) } onBlur={()=>handleEditTitleOnListaSimple(index, value)}/>
        </div>
    )
}