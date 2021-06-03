const fakePacientData = [
    { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Manuel Tapia",estado:1 },
    { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Manuel Tapia",estado:1 },
    { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Manuel Tapia",estado:0 },
    { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave",estado:0 },
    { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave",estado:0 },
    { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave",estado:0 },
    { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ronie Cave",estado:0 },
    { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ugo HalaMadrid",estado:0 },
    { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ugo HalaMadrid",estado:0 },
    { fecha: "15/05/2021", hora: "10:00 - 11:00", psico: "Ugo HalaMadrid",estado:0 },

];


export const fake_getListaCitas = () => {
    return new Promise((resolve, reject) => {
      let fak_data = fakePacientData;
      fak_data.forEach((element, index) => {
        element.nro = index + 1;
      });
      setTimeout(() => {}, 2500);
      resolve(fak_data);
    });
  };