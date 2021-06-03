export const estadoInicial = {
    open:false,
    childComponentBody:null,
    childComponentActions:null,
  };
const openMultiDialogReducer = (state = estadoInicial, action) => {
    switch (action.type) {
        case "OPEN_DIALOG":
          return {
            ...state,
            openMultiMensaje: action.openMultiMensaje.open,
            postCloseMD: action.openMultiMensaje.postCloseMD,
            title: action.openMultiMensaje.title,
            childComponentBody: action.openMultiMensaje.childComponentBody,
            childComponentActions: action.openMultiMensaje.childComponentActions,
          };
        default:
          return state; 
      } 
}
export default openMultiDialogReducer;