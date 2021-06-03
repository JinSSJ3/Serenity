import React, {  useEffect } from 'react';

const GruposDeApoyo = props => {
    useEffect(()=>{
        props.makeSubtitulo("Grupos de Apoyo");
    });
    
        return (
            <div>
                Grupos de Apoyo
            </div>
        );
    
}

export default GruposDeApoyo;