export const openMensajePantallaMD = (dispatchMultiDialog, openMultiMensaje) => {
    //console.log("OPEEEEEN", openMensaje);
    dispatchMultiDialog({
        type: "OPEN_DIALOG",
        openMultiMensaje:openMultiMensaje
    });
}