import { useEffect, useState } from "react"
import { Login } from "../../GlobalComponents/Login/Login";
import { NavegacionIzquierda } from "../../GlobalComponents/NavegacionIzquierda/NavegacionIzquierda";
import { NavegacionDerecha } from "../../GlobalComponents/NavegacionDerecha/NavegacionDerecha";

export const IndexMain = (): JSX.Element => {
    const [ showLogin , setShowLogin ] = useState(false);

    // Login
    const handleOpenLogin = () => {
        setShowLogin(true);
    }

    const handleCloseLogin = () => {
        setShowLogin(false);
    }

    return (
        <div className="mainPage">
            { showLogin &&
                <Login closeFunction = { handleCloseLogin }/>
            }
            <NavegacionIzquierda handleOpenLogin = { handleOpenLogin }/>
            <NavegacionDerecha/>
        </div>
    )   
}