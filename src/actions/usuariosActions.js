import axios from "axios";
import { CARGANDO, TRAER_TODOS, ERROR } from "../types/usuariosTypes";
export const traerTodos = () => async (dispatch) => {
  try {
    dispatch({
      type: CARGANDO,
    });

    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({
      type: TRAER_TODOS,
      payload: respuesta.data,
    });
  } catch (error) {
    console.log("error:", error.message);
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
