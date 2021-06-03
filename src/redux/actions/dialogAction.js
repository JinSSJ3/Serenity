export const openMensajePantalla = (dispatchDialog, openMensaje) => {
  console.log("OPEEEEEN", openMensaje);
  const action = {
    type: "OPEN_BACKDROP",
    open: openMensaje.open,
    mensaje: openMensaje.open,
  }
  dispatchDialog(action);
};
