import { fakeLogin, fakeLogOut } from "../../Fake_DataBase/dummy_usuario";
import { localLogOut, localLogin, getUser } from "../Sesion";
import { closeBackDropAction, openBackDropAction } from "./backDropAction";
/**
 *
 * @param {*} dispatch
 * @param {*} usuario
 * @param {*} password
 */
export const iniciarSesion = async (dispatch, usuario) => {
  return new Promise(async (resolve, reject) => {
    try {
      //console.log(" Login V2: ", usuario);

      /////////////////////////
      console.log("Logueando: ", usuario);
      const usuarioL = await fakeLogin(usuario.nombre, usuario.email);

      if (usuarioL.error) {
        console.log("usuarioL.error : ", usuarioL.error);
        resolve({ status: false, error: usuarioL.error });
      } else {
        dispatch({
          type: "LOG_IN",
          usuario: usuarioL,
          auth: true,
        });
        localLogin(usuarioL);
      }

      resolve(usuarioL);
    } catch (error) {
      reject({ status: false, error: error });
    }
  });
};
/**
 *
 * @param {dispatchAciton} dispatch
 * @param {*} usuario
 * @param {*} password
 */
export const registrarse = (dispatch, newUser) => {
  return new Promise((resolve, reject) => {
    try {
      //llamo al back aqui
      //let new User = await POST({servicio:"/api/registrarse",request:usuario});
      dispatch({
        type: "LOG_IN",
        usuario: newUser,
        auth: true,
      });
      localLogin(newUser);
      resolve({ status: true });
    } catch (error) {
      reject();
    }
  });
};
/**
 *
 * @param {*} dispatch
 */
export const logOut = (dispatch, dispatchBackdrop) => {
  console.log("Logout llamado");
  return new Promise(async (resolve, reject) => {
    try {
      //llamo al back aqui
      //await POST({servicio:"/api/registrarse",request:usuario});
      localLogOut();
      openBackDropAction(dispatchBackdrop, {
        mensajeBD: "Cerrando Sesion, por favor espere",
      });
      await fakeLogOut();
      closeBackDropAction(dispatchBackdrop, {});

      dispatch({
        type: "FINISH_SESION",
        usuario: {},
        auth: false,
      });

      resolve({ status: true });
    } catch (error) {
      console.log("error login: ", error);
      reject({ status: false });
    }
  });
};
/**
 *
 * @param {*} dispatch
 * @param {*} usuario
 */
export const inicializarSesion = (dispatch, usuario) => {
  //console.log("Inicializando...");
  try {
    //chequeo al el storage
    let usuarioLogueado = getUser();
    console.log("Revisando Storage", usuarioLogueado);
    if (usuarioLogueado) {
      console.log("Storage Data inicial", usuarioLogueado);
      dispatch({
        type: "INITIALIZE_SESION",
        usuario: usuarioLogueado,
        auth: true,
      });
      return { status: true, data: usuarioLogueado, HOMEPAGE: "/" };
    }
    //console.log("Storage vacio", usuarioLogueado);

    dispatch({
      type: "INITIALIZE_SESION",
      usuario: usuario,
      auth: false,
      // },
    });
    return { status: false, data: "storage vacio" };
  } catch (error) {
    return { status: false, data: "MALDICIOOOOOOOON" };
  }
};
