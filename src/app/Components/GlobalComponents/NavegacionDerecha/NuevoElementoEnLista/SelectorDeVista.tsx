import { eliminarElUltimoElemento } from "@/app/Datos/CRUD";

type Props = {
    vista: boolean;
    setVista: (newValue: boolean) => void;
}
export const SelectorDeVista = ({ vista, setVista }: Props) => {
    return (
        <div className="SelectorDeVista">
            <div className="selector" onClick={()=> setVista(!vista)}>
                Vista trasera <input type="checkbox" />
            </div>
            <button className="eliminar" onClick={()=> eliminarElUltimoElemento()}>
                borrar elemento
            </button>
        </div>
    )
}