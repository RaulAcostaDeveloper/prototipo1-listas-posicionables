type Props = {
    closeFunction:(...args: any[]) => void;
}
export const DefaultClodeButtonModal = ({ closeFunction }: Props): JSX.Element => {
    return (
        <div className="containerDefaultCloseButtonModal">
            <div className='containerButton'>
                <button onClick={ ()=> closeFunction() }>Cerrar</button>
            </div>
        </div>
    )
}