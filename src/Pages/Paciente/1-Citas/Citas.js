import { Button, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import JTableSSJ from "../../../Components/Genericos/JMaterialTable/JTableSSJ";
import { fake_getListaCitas } from "../../../fakeServer/dummyData";
import axios from "axios";

// function setFakeDataTable() {
//     const data = [
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Manuel Tapia",estado:1 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Manuel Tapia",estado:1 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Manuel Tapia",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ugo HalaMadrid",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ugo HalaMadrid",estado:0 },
//         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ugo HalaMadrid",estado:0 },
//     ]
//     return data;
// }

const columns = [
    { title: "Nro.", field: "nro" },
    { title: "Fecha", field: "fecha" },
    { title: "Hora", field: "hora" },
    { title: "Psicólogo", field: "psico" },
    {
        title: "Estado",
        field: "estado",
        render: (rowData) => {
            if (rowData.estado) {
                //const idEval = rowData.idEval;
                return (
                    <Button
                        //href="/dummy"
                        //onClick={(e) => this.handleclickLink({ idEval, ...e })}
                        variant="contained"
                        color="primary"
                    // onClick={() => {
                    //     console.log("Redicreccion desde CursoXHorario goback");
                    //     props.history.goBack();
                    // }}
                    >
                        Iniciar Sesión
                    </Button>
                );
            } else {
                return <Typography>Finalizado</Typography>;
            }
        },
    },
];

const Citas = (props) => {
    // function setFakeDataTable() {
    //     const data = [
    //         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Manuel Tapia", estado: 1 },
    //         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Manuel Tapia", estado: 1 },
    //         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Manuel Tapia", estado: 0 },
    //         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave", estado: 0 },
    //         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave", estado: 0 },
    //         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave", estado: 0 },
    //         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave", estado: 0 },
    //         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ugo HalaMadrid", estado: 0 },
    //         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ugo HalaMadrid", estado: 0 },
    //         { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ugo HalaMadrid", estado: 0 },
    //     ]
    //     return data;
    // }

    const [data, setData] = React.useState([]);
    //const [loading, setLoading] = React.useState(true);

    //async function setRows() {
    // async function setRows(listaCitas) {

    //     //setFakeDataTable(fakeData);
    //     //let listaCitas = await fake_getListaCitas();
    //     //let data = [];

    //     if (listaCitas && listaCitas.length > 0) {
    //         listaCitas.forEach((element, index) => {
    //             //element.nro = index + 1;
    //             data.push(element);
    //         });

    //         setData(data);

    //     }
    //     setLoading(false);
    //     //-----------
    //     // let data = await fake_getListaCitas();
    //     // setData(data);
    //     // setLoading(false);

    // }

    const callData = async () => {
        //setLoading(true);
        const vale = await fake_getListaCitas();
        console.log("XXXvale-> useEfct->", vale);
        if (vale && vale.length > 0) {
            setData(vale);
        }
        //setLoading(false);

        //---
        
        // const idUser = 7; //getUser().id +-...
        // try {
        //     const res = await axios.get(process.env.REACT_APP_MAIN_SERVER + `/listarCitasPaciente/${idUser}`);
        //     if (res && res.data.length > 0) {
        //         let vale = res.data;
        //         vale.forEach((element, index) => {
        //             element.nro = index + 1;
        //         });
        //         setData(vale);
        //     }
        // } catch (error) {
        //     console.log('Error en catch de listarCitasPaciente');
        // }

    };

    useEffect(() => {
        props.makeSubtitulo(" MIS CITAS");
        //callBack to set data table

        // const asdas = setFakeDataTable();
        // //console.log('fakeDataTable-> ', fakeData);
        // setRows(asdas);

        //-------
        // const tys = setFakeDataTable();
        // setRows(tys);

        //-------
        //setRows();
        callData();
    });

    return (
        <div>
            <div style={{ display: "flex", justifyContent: 'flex-end' }}>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        props.history.push("/paciente/citas/agendar");
                    }}
                >
                    Agendar Cita
            </Button>
            </div>

            <JTableSSJ
                loading={false}
                rows={data}
                columns={columns}
            //title={"son cositas de la vida"}.. si descomento se  muere el navegador .. to investigate
            />
        </div>
    );
};

export default Citas;
