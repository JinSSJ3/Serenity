import React, { useEffect, useState } from 'react';
import PageWrapper from '../../Components/Compartidos/PageWrapper';
import GruposDeApoyo from '../Psicologo/3-GruposDeApoyo/GruposDeApoyo';
import AgendarCita from './1-Citas/AgendarCita';
import Citas from './1-Citas/Citas';
import SesionVideoLlamada from './1-Citas/SesionVideoLlamada';
import ActividadesXPlanDeAccion from './2-PlanDeAccion/ActividadesXPlanDeAccion';
import PlanesDeAccion from './2-PlanDeAccion/PlanesDeAccion';
import Encuestas from './5-Encuestas/Encuestas';
import Diarios from "./3-Diario/Diarios";
import MisGruposDeAccion from './4-GruposDeApoyo/MisGruposDeAccion';
import { Route } from "react-router-dom";

const PacienteMainPage = props => {
    //const [fakeData, setFakeData] = React.useState([]);

    // const createFakeData=()=> {
    //     let data = [
    //         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Manuel Tupia" },
    //         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cueva" },
    //         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Hugo Alatrista" },
    //     ];
    //     console.log('dataEnSetFake(PaceinteMainPage)-> ', data);
    //     setFakeData(data);
    
    // }
    const [subtitulo, setSubtitulo] = useState(undefined);
    const makeSubtitulo = (_subtitulo) => {
        setSubtitulo(_subtitulo);
    }

    useEffect(() => {
        document.title = "Serenity | Paciente";
        // createFakeData();
        // console.log('afterCreateeee');
    });

    return (
        <PageWrapper {...props} subtitulo={subtitulo}>
            <Route exact path="/paciente" component={(props) =>
                <Citas
                    {...props}
                    // fakeData ={fakeData}
                    makeSubtitulo={makeSubtitulo}
                    />
            } />

            <Route exact path="/paciente/citas" component={(props) => <Citas {...props} makeSubtitulo={makeSubtitulo} />} />
            <Route exact path="/paciente/citas/agendar" component={(props) => <AgendarCita {...props} makeSubtitulo={makeSubtitulo} />} />
            <Route exact path="/paciente/citas/sesion" component={(props) => <SesionVideoLlamada {...props} makeSubtitulo={makeSubtitulo} />} />


            <Route exact path="/paciente/plan-accion" component={(props) => <PlanesDeAccion {...props} makeSubtitulo={makeSubtitulo} />} />
            <Route exact path="/paciente/plan-accion/actividades" component={(props) => <ActividadesXPlanDeAccion {...props} makeSubtitulo={makeSubtitulo} />} />

            <Route exact path="/paciente/diarios" component={(props) => <Diarios {...props} makeSubtitulo={makeSubtitulo} />} />

            <Route exact path="/paciente/grupos-apoyo" component={(props) => <GruposDeApoyo {...props} makeSubtitulo={makeSubtitulo} />} />
            <Route exact path="/paciente/grupos-apoyo/mis-grupos-accion" component={(props) => <MisGruposDeAccion {...props} makeSubtitulo={makeSubtitulo} />} />

            <Route exact path="/paciente/encuestas" component={(props) => <Encuestas {...props} makeSubtitulo={makeSubtitulo} />} />



            {/* Paciente */}
        </PageWrapper>
    );
}

export default PacienteMainPage;