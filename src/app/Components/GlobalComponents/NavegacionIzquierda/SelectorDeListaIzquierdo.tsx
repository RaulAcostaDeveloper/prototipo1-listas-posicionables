import { BotonBorrarLista } from "./BotonBorrarLista";
import { IconoDeLista } from "./IconoDeLista"
import { TituloElementoLista } from "./TituloElementoLista";
type ElementoLista = {
    title: string;
    icon: string;
}
type Props = {
    handleCloseIzquierda: (...args: any[]) => void;
    isSelected: boolean;
    objetoLista: ElementoLista;
    index: number;
}
export const SelectorDeListaIzquierdo= ({ handleCloseIzquierda, isSelected, objetoLista, index }: Props) => {

    return (
        <div className="selectorDeListaIzquierdo">
            <IconoDeLista handleCloseIzquierda={ handleCloseIzquierda } index = { index }/>
            { isSelected &&
                <TituloElementoLista titulo = { objetoLista.title } index = { index } />
            }
            { isSelected && index != 0 &&
                <BotonBorrarLista index = { index }/>
            }
        </div>
    )
}