export const estadoInicial = {
  open: false,
  mensaje: "",
  childComponent: null,
};
const openDialogReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case "OPEN_DIALOG":
      return {
        ...state,
        openMensaje: action.openMensaje.open,
        mensaje: action.openMensaje.mensaje,
        postClose: action.openMensaje.postClose,
        childComponent: action.openMensaje.childComponent,
      };
    default:
      return state;
  }
};
export default openDialogReducer;
