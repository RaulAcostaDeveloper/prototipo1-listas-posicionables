export const LoginForm = (): JSX.Element => {
    return (
        <div className="loginForm">
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="username" />
                    <div className="recuperacion">
                        No recuerdo mi usuario
                    </div>
                </div>
                <div className="input">
                    <input type="text" placeholder="password" />
                    <div className="recuperacion">
                        Olvidé mi contraseña
                    </div>
                </div>
            </div>
            <div className="botonIniciarSesion">
                <button>Iniciar sesión</button>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}