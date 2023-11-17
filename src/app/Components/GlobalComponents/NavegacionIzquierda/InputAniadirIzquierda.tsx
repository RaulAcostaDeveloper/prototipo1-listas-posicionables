type Props = {
    setNuevoTitulo: (...args: any[]) => void;
    nuevoTitulo: string;
}
export const InputAniadirIzquierda = ({ nuevoTitulo, setNuevoTitulo }: Props) => {
    
    return (
        <div className="InputAniadirIzquierda">
            <input type="text" placeholder="Nueva lista" value={ nuevoTitulo } onChange={ (e) => setNuevoTitulo(e.target.value) }/>
        </div>
    )
}