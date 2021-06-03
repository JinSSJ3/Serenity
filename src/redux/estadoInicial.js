export const EstadoInicialUser = {
  usuario: {},
  auth: false,
};
export const EstadoInicialDialog = {
  openMensaje: false,
  mensaje: "vacio",
  postClose: () => {
    console.log("*********");
  },
  childComponent: null,
};

export const EstadoInicialMultiDialog = {
  openMultiMensaje: false,
  postCloseMD: () => {
    console.log("*********");
  },
  childComponentBody: null,
  childComponentActions: null,
};

export const EstadoInicialBackDrop = {
  openBackDrop: false,
  mensajeBD: "Cargando"
}