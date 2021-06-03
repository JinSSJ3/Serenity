import React, { useEffect } from "react";
import {VideoCallAgora}  from "./AgoraVideoCall";

const SesionVideoLlamada = (props) => {
 if(props.makeSubtitulo){
  props.makeSubtitulo("Prueba de videolamada de Paciente");
 }

  return <div><VideoCallAgora {...props}/></div>;
};

export default SesionVideoLlamada;
