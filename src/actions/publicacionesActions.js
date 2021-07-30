import axios from "axios";
import {
  CARGANDO,
  ERROR,
  TRAER_POR_USUARIO,
} from "../types/publicacionesTypes";

export const traerPorUsuario = (key) => async (dispatch, getState) => {
  const { publicaciones } = getState().publicacionesReducer;
  const { usuarios } = getState().usuariosReducer;
  const usuarioId = usuarios[key].id;

  const respuesta = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${usuarioId}`
  );

  const publicaciones_actualizadas = [...publicaciones, respuesta.data];

  dispatch({
    type: TRAER_POR_USUARIO,
    payload: publicaciones_actualizadas,
  });
};
