import React, { useEffect } from 'react';

const PlanesDeAccion = props =>{
    useEffect(()=>{
        props.makeSubtitulo("Planes de acción");
    });
        return (
            <div>
                Planes de acción
            </div>
        );
    
}

export default PlanesDeAccion;