import{ ReactNode } from 'react';

type Props = {
    srcImg: string;
    altImg: string;
    titleModal: string;
    closeFunction:(...args: any[]) => void;
}
export const HeaderModal = ({ srcImg, altImg, titleModal, closeFunction }: Props): JSX.Element => {
    return (
        <div className="headerModal">
            <div className="containerImg">
                <img src={ srcImg } alt={ altImg } />
            </div>
            <div className="containerText">
                <h3>{ titleModal }</h3>
            </div>
            <div className="containerButtonClose">
                <button onClick={ ()=> closeFunction() }>
                    <img src="../icons/cerrar.png" alt="" />
                </button>
            </div>
        </div>
    )
}