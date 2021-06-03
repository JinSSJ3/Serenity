export const openBackDropAction = (dispatchBackdrop, openMensaje) => {
    console.log("OPEEEEEN", openMensaje);
    dispatchBackdrop({
        type: "OPEN_BACKDROP",
        openMensaje:openMensaje
    });
} 
export const closeBackDropAction = (dispatchBackdrop, openMensaje) => {
    console.log("CLOSEEE", openMensaje);
    dispatchBackdrop({
        type: "CLOSE_BACKDROP",
        openMensaje:openMensaje
    });
} 