import React, {  useEffect } from 'react';

const ActividadesXPlanDeAccion = props =>{
    useEffect(()=>{
        props.makeSubtitulo("Actividades del plan de Acción");
    });
        return (
            <div>
                Actividades del plan de Acción
            </div>
        );
    
}

export default ActividadesXPlanDeAccion;