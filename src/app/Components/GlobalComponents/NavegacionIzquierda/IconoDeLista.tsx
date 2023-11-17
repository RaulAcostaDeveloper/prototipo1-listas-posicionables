import { seleccionarUnaListaDeDatos } from "@/app/Datos/CRUD";

type Props = {
    index: number;
    handleCloseIzquierda: (...args: any[]) => void;
}
export const IconoDeLista = ({ index, handleCloseIzquierda }: Props) => {
    const handleClickIcon = () => {
        handleCloseIzquierda();
        seleccionarUnaListaDeDatos(index);
    }
    return (
        <div className="iconoDeLista" onClick={ ()=> handleClickIcon() }>
            <img src="../icons/estrella.png" alt="star" />
        </div>
    )
}