import React, { useEffect } from 'react';
import {  Route } from "react-router-dom";

import PageWrapper from '../../Components/Compartidos/PageWrapper';
import Reportes from '../EntidadPrimaria/3-Reportes/Reportes';
import EntidadesPrimarias from './1-EntidadPrimaria/EntidadesPrimarias';
import GruposApoyoXEntidadPrimaria from './1-EntidadPrimaria/GruposApoyoXEntidadPrimaria';
import PacienteXEntidadPrimaria from './1-EntidadPrimaria/PacienteXEntidadPrimaria';
import PsicologosXEntidadPrimaria from './1-EntidadPrimaria/PsicologosXEntidadPrimaria';
import PsicologosXGrupo from './1-EntidadPrimaria/PsicologosXGrupo';
import Configuracion from "./3-Configuracion/Configuracion";
const EntidadProveedoraMainPage =props=> {
    useEffect(()=>{
        document.title="Serenity | Ent. Proveedora"
    });
        return (
            <PageWrapper {...props}>
                 <Route exact path="/entidad-proveedora" component={(props)=><EntidadesPrimarias {...props}/>} />
                 <Route exact path="/entidad-proveedora/entidades-primarias" component={(props)=><EntidadesPrimarias {...props}/>} />
                 <Route exact path="/entidad-proveedora/grupo-apoyo" component={(props)=><GruposApoyoXEntidadPrimaria {...props}/>} />
                 <Route exact path="/entidad-proveedora/paciente-entidad-primaria" component={(props)=><PacienteXEntidadPrimaria {...props}/>} />
                 <Route exact path="/entidad-proveedora/psicologo-grupo" component={(props)=><PsicologosXGrupo {...props}/>} />
                 <Route exact path="/entidad-proveedora/psicologo-entidad-primaria" component={(props)=><PsicologosXEntidadPrimaria {...props}/>} />

                 <Route exact path="/entidad-proveedora/reportes" component={(props)=><Reportes {...props}/>} />
                 <Route exact path="/entidad-proveedora/configuracion" component={(props)=><Configuracion {...props}/>} />

              
                EntidadProveedora
            </PageWrapper>
        );
}

export default EntidadProveedoraMainPage;