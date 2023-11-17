import{ ReactNode } from 'react';
import { HeaderModal } from './HeaderModal';
import { BodyModal } from './BodyModal';
import { DefaultClodeButtonModal } from './DefaultCloseButtonModal';

type Props = {
    children?: ReactNode;
    srcImg: string;
    altImg: string;
    titleModal: string;
    closeFunction:(...args: any[]) => void;
    showDefaultCloseButton?: boolean;
}
export const Modal = ({ children, srcImg, altImg, titleModal, closeFunction, showDefaultCloseButton }: Props): JSX.Element => {
    return (
        <div className="containerModal">
            <div className="innerModal">
                <HeaderModal
                    srcImg = { srcImg }
                    altImg = { altImg }
                    titleModal = { titleModal }
                    closeFunction = { closeFunction }
                />
                <BodyModal>
                    { children }
                </BodyModal>
                { showDefaultCloseButton &&
                    <DefaultClodeButtonModal closeFunction = { closeFunction }/>
                }
            </div>
        </div>
    )
}