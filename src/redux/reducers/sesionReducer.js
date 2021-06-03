export const estadoInicial = {
  //sesion: {
  
};
const sesionReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case "LOG_IN":
      //console.log("LOG_IN, action", action);
      return {
        ...state,
        usuario: action.usuario,
        auth: action.auth,
      };
    case "CHANGE_SESION":
      //console.log("CHANGE_SESION, action", action);
      return {
        ...state, 
        usuario: action.usuario,
        auth: action.auth,
      };
    case "FINISH_SESION":
      //console.log("FINISH_SESION, action", action);
      return {
        ...state,
        usuario: action.usuario,
        auth: action.auth,
      };

    case "INITIALIZE_SESION":
      //console.log("INITIALIZE_SESION, action", action);
      return {
        ...state,
        usuario: action.usuario,
        auth: action.auth,
      };

    default:
      return state;
  }
};
export default sesionReducer;
