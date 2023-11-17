import { aniadirNuevaListaSimple } from "@/app/Datos/CRUD";

type Props = {
    nuevoTitulo: string;
    setNuevoTitulo: (...args: any[]) => void;
}
export const BotonAniadirLista = ({ nuevoTitulo, setNuevoTitulo }: Props) => {
    const handleClickButton = () => {
        const obj = {
            title: nuevoTitulo,
            icon:'',
        }
        aniadirNuevaListaSimple(obj);
        setNuevoTitulo('');
    }
    return (
        <button className="botonAniadirLista" onClick={ ()=> handleClickButton() }>
            <img src="../icons/boton-agregar.png" alt="add button" />
        </button>
    )
}