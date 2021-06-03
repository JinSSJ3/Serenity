import sesionReducer from "./sesionReducer";
import openDialogReducer from "./openDialogReducer";

export const mainReducer = ({sesion, openDialog},action) => {
    return {
        sesion: sesionReducer(sesion,action),
        openDialog: openDialogReducer(openDialog,action) 
    }
}