import { useEffect, useState } from "react"
import { ListaDeListas } from "./ListaDeListas"
import { ElementoAniadirLista } from "./ElementoAniadirLista";
import { BotonLoginIzquierda } from "./BotonLoginIzquierda";

type Props = {
    handleOpenLogin: (...args: any[]) => void;
}
let toggleRender = false;
export const NavegacionIzquierda = ({ handleOpenLogin }: Props): JSX.Element => {
    const [ isSelected, setIsSelected ] = useState(false);
    const [ toggleForRender, setToggleForRender ] = useState(toggleRender);

    useEffect(()=>{
        document.addEventListener('renderLeft', handleRender);
    },[]);

    const handleRender = () => {
        toggleRender = !toggleRender;
        setToggleForRender(toggleRender);
    }

    const handleOpenIzquierda = () => {
        setIsSelected(true);
    }

    const handleCloseIzquierda = () => {
        setIsSelected(false);
    }

    return (
        <div 
            className={`NavegacionIzquierda ${isSelected ? 'isNavegacionIzquierdaSelectedByUser' : '' }`} 
            onMouseOver={handleOpenIzquierda}
            onMouseOut={handleCloseIzquierda}>
            <ElementoAniadirLista isSelected = { isSelected }/>
            <ListaDeListas isSelected = { isSelected } handleCloseIzquierda = { handleCloseIzquierda }/>
            { isSelected &&
                <BotonLoginIzquierda handleOpenLogin = { handleOpenLogin }/>
            }
        </div>
    )
}