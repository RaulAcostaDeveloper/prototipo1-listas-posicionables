type Props = {
    handleOpenLogin:  (...args: any[]) => void;
}
export const BotonLoginIzquierda = ({ handleOpenLogin }: Props) => {
    return (
        <div className="botonLoginIzquierda">
            <button onClick={()=> handleOpenLogin() }>Login</button>
        </div>
    )
}