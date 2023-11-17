import { handleDeleteListaSimple } from "@/app/Datos/CRUD";

type Props = {
    index: number;
}
export const BotonBorrarLista = ({ index }: Props) => {
    return (
        <div className="botonBorrarLista">
            <button onClick={ () => handleDeleteListaSimple(index) }>x</button>
        </div>
    )
}