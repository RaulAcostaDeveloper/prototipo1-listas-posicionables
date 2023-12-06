type Props = {
    showMenuSelector: boolean;
    setShowMenuSelector:(newValue: boolean) => void;
}
export const BotonAniadirElemento = ({ showMenuSelector, setShowMenuSelector}: Props) => {
    return (
        <button className="botonAniadirElemento" onClick={()=> setShowMenuSelector(!showMenuSelector)}>
            <img src="../icons/boton-agregar.png" alt="Boton agregar" />
        </button>
    )
}