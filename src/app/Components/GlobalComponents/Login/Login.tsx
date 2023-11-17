import { useState } from "react";
import { Modal } from "../Modales/Modal"
import { LoginForm } from "./LoginForm";
import { InscribirseForm } from "./InscribirseForm";
type Props = {
    closeFunction:(...args: any[]) => void;
}
export const Login = ({ closeFunction }: Props): JSX.Element => {
    const [ isLoginForm, setIsLoginForm ] = useState(true);
    return (
        <Modal 
            srcImg = { '../icons/usuario.png' }
            altImg = { 'Profile picture' }
            titleModal = { 'Perfil' }
            closeFunction = { closeFunction }
            showDefaultCloseButton >
            <div className="navigation">
                <div className="opcion">
                    <button onClick={ () => setIsLoginForm(true) }>Inicia sesión</button>
                </div>
                <div className="opcion">
                    <button onClick={ () => setIsLoginForm(false) }>Inscríbete</button>
                </div>
            </div>
            { isLoginForm ?  <LoginForm/> : <InscribirseForm/>}
        </Modal>
    )
}