import { useState } from "react";
import TarjetaColorElegido from "./TarjetaColorElegido";

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [color, setColor] = useState('');
    const [mostrarCard, setMostrarCard] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones
        if (nombre.trim().length < 3) {
            setError(true);
            setMostrarCard(false);
            // alert('El nombre debe tener al menos 3 caracteres y no puede comenzar con espacios en blanco.');
            return;
        }

        if (color.length < 6) {
            setError(true);
            setMostrarCard(false);
            // alert('El color debe tener al menos 6 caracteres.');
            return;
        }
        setError(false);
        setMostrarCard(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <br />
                <input id="nombre" type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <br />
                <label htmlFor="color">Color:</label>
                <br />
                <input id="color" type="text" placeholder="Ingrese su color favorito(formato HEX)" value={color} onChange={(e) => setColor(e.target.value)} />
                <br />
                <br />
                <button type="submit">Enviar</button>
            </form>
            {error && (
                <h4 style={{ color: "red" }}>
                    Por favor chequea que la información sea correcta
                </h4>
            )}
            {mostrarCard && <TarjetaColorElegido nombre={nombre} color={color} />}
        </div>
    );
};

export default Formulario;