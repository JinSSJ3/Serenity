import React, { useEffect } from 'react';
import {  Route } from "react-router-dom";

import PageWrapper from '../../Components/Compartidos/PageWrapper';
import Institucion from './1-Institucion/Institucion';
import Pacientes from './2-Pacientes/Pacientes';
import Reportes from './3-Reportes/Reportes';

const EntidadPrimariaMainPage =props=> {
    useEffect(()=>{
        document.title="Serenity | Ent. Primara"
    });
        return (
            <PageWrapper {...props}>
                 <Route exact path="/entidad-primaria" component={()=><Institucion {...props}/>} />
                 <Route exact path="/entidad-primaria/institucion" component={()=><Institucion {...props}/>} />
                 <Route exact path="/entidad-primaria/pacientes" component={()=><Pacientes {...props}/>} />
                 <Route exact path="/entidad-primaria/reportes" component={()=><Reportes {...props}/>} />
                EntidadPrimaria
            </PageWrapper>
        );
}

export default EntidadPrimariaMainPage;