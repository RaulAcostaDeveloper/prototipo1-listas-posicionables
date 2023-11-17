export const InscribirseForm = (): JSX.Element => {
    return (
        <div className="inscribirseForm">
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="username" />
                </div>
                <div className="input">
                    <input type="text" placeholder="password" />
                </div>
            </div>
            <div className="botonIniciarSesion">
                <button>Inscribirse</button>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}