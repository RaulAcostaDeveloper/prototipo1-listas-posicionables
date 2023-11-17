import { arregloDeListasSimple } from "@/app/Datos/CRUD";
import { SelectorDeListaIzquierdo } from "./SelectorDeListaIzquierdo"

type Props = {
    handleCloseIzquierda: (...args: any[]) => void;
    isSelected: boolean;
}

export const  ListaDeListas = ({ handleCloseIzquierda, isSelected }: Props) => {
    
    return (
        <div className="listaDeListas">
            {/* Lista de selectores */}
            { arregloDeListasSimple.map( (el, index) =>
                <div key={el.title + index } id={ el.title + Math.random() }>
                    <SelectorDeListaIzquierdo handleCloseIzquierda={ handleCloseIzquierda} isSelected = { isSelected } objetoLista = { el } index = { index }/>
                </div>
            )}
        </div>
    )
}