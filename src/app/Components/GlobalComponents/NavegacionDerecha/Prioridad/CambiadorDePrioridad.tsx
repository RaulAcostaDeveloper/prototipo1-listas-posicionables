type Props = {
    prioridad: number;
    setPrioridad: (...args: any[]) => void;
}
export const CambiadorDePrioridad = ({prioridad, setPrioridad }: Props) => {
    const handleSumaPrioridad = () => {
        setPrioridad(prioridad + 1)
    }
    const handleRestaPrioridad = () => {
        if (prioridad > 0) {
            setPrioridad(prioridad - 1)
        }
    }
    return (
        <div className="cambiadorDePrioridad">
            <button onClick={ ()=> handleSumaPrioridad() }>
                <img src="../icons/caret-arriba.png" alt="" />
            </button>
            <button onClick={ ()=> handleRestaPrioridad() }>
                <img src="../icons/caret-abajo.png" alt="" />
            </button>
        </div>
    )
}