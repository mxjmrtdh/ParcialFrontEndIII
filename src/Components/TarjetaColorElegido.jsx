import { useState } from "react";

const TarjetaColorElegido = ({ nombre, color }) => {

    return (
        <>
            <div style={{marginTop:"20px", padding:"10px", border: "2px solid red", borderRadius:"25px"}}>
                <h3>Hola {nombre}!</h3>
                <p>Tu color favorito es:</p>
                <button style={{ backgroundColor: color }} type="button">{color}</button>
            </div>
        </>
    );
};
export default TarjetaColorElegido;