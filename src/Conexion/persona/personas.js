import axios from "axios";

const baseURL = "persona";
const REACT_APP_MAIN_SERVER =process.env.REACT_APP_MAIN_SERVER;
/**
 *
 * @returns a list of people
 */
export const listarPersonas = async () => {
  const defaultResponse = [
    { id: 100000, nombre: "trujillo", rol: "profe" },
    { id: 20000, nombre: "gaaaaa", rol: "JP" },
    { id: 3000000, nombre: "chupetin", rol: "vas a caer" },
  ];

  /*   axios
    .get(
      REACT_APP_MAIN_SERVER + 
      `/${baseURL}`)
    .then((res) => {
      console.log("listaar:", res);
    })
    .catch((error) => {
      console.log(`Error al listar personas:`, error);
    });
   */
  try {
    //AQUI SE HACE LA LLAMADA

    const res = await axios.get(REACT_APP_MAIN_SERVER + `/${baseURL}`);
    console.log("listar:", res);
    return res.data;

    //return defaultResponse;
  } catch (error) {
    console.log(`Error al listar personas:`, error);
    return defaultResponse;
  }
};

/**
 * Register a person in database
 * @param {id,nombre,rol} persona
 * @returns Aun no lo se xd
 */
export const registrarPersona = async (
  persona = { id: 3, nombre: "Selena Gomez", rol: "paciente" }
) => {
  try {
    const res = await axios.post(
      REACT_APP_MAIN_SERVER + `/${baseURL}/registrar`,
      persona
    );
    return res.data;
  } catch (error) {
    console.log(`Error al registrar persona ${persona}`, error);
    return {};
  }
};

/**
 * Edits an existing person in to database *
 * @param {*} id
 * @param {nombre|rol} data
 * @returns no se aun xd
 */

export const editarPersona = async (
  id = 1,
  data = { nombre: "Elmer Huerta", rol: "Doctor" }
) => {
  try {
    const res = await axios.put(
      REACT_APP_MAIN_SERVER + `/${baseURL}/editar${id}`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(`Error al editar a la persona con id ${id}: `, error);
    return {};
  }
};
