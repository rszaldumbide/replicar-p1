import '../stylesheets/Testimonio.css';
import React from 'react';

function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img
                className="imagen-testimonio"
                src={require(`../imgs/${props.imagen}.png`)}
                alt="Foto de Emma" />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className="cargo-testimonio">
                    {props.cargo} en <b>{props.empresa}</b>
                </p>
                <p className="texto-testimonio">
                    {props.testimonio}
                </p>
            </div>
        </div>
    );
}

export default Testimonio;