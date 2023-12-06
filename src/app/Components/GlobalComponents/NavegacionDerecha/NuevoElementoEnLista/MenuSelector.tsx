type Props = {
    setShowMenuSelector:(newValue: boolean) => void;
}
export const MenuSelector = ({ setShowMenuSelector}: Props) => {
    return (
        <div className="menuSelectorContainer" onClick={()=> setShowMenuSelector(false)}>
            <div className="MenuSelector">
                <button className="close">
                  x  
                </button>
                <div className="elementoTipo">
                    <div className="containerImagen">
                        <div className="img">

                        </div>
                    </div>
                    <div className="containerTitulo">
                        Date
                    </div>
                </div>
                <div className="elementoTipo">
                    <div className="containerImagen">
                        <div className="img">

                        </div>
                    </div>
                    <div className="containerTitulo">
                        Cantidad
                    </div>
                </div>
                <div className="elementoTipo">
                    <div className="containerImagen">
                        <div className="img">

                        </div>
                    </div>
                    <div className="containerTitulo">
                        Checkbox
                    </div>
                </div>
                <div className="elementoTipo">
                    <div className="containerImagen">
                        <div className="img">

                        </div>
                    </div>
                    <div className="containerTitulo">
                        Número
                    </div>
                </div>
                <div className="elementoTipo">
                    <div className="containerImagen">
                        <div className="img">

                        </div>
                    </div>
                    <div className="containerTitulo">
                        Número
                    </div>
                </div>
                <div className="elementoTipo">
                    <div className="containerImagen">
                        <div className="img">

                        </div>
                    </div>
                    <div className="containerTitulo">
                        Número
                    </div>
                </div>
            </div>
        </div>
    )
}