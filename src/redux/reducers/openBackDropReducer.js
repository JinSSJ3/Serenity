const openBackDropReducer = (state, action) => {
  console.log("ACTION::::",action);
  switch (action.type) {
    case "OPEN_BACKDROP":
      return { 
        ...state, 
        openBackDrop: true, 
        mensajeBD: action.openMensaje.mensajeBD };
    case "CLOSE_BACKDROP":
      return { ...state, openBackDrop: false, mensajeBD: "" };
    default:
      return state;
  }
};
export default openBackDropReducer;
