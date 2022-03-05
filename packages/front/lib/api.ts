import axios from "axios";

const apiBaseURL = "http://localhost:3001";

//personalizamos la api, todas las peticiones que haga ban a aser siempre a la direccion que indico.
const api = axios.create({ baseURL: apiBaseURL });

//funcion asincrona que me devolvera un await de api.get y añadimos parent. le pedimso que nso devuelva data.
//getparent hace una peiticion a axios de mi servidor, cuando se termina de cargar el componente correspondiente
export const getParent = async () => {
  const res = await api.get("/parents");
  console.log(res);
  return res.data;
};

export const addParent = async (data) => {
  const res = await api.post("/parents", data);
  console.log(res);
  return res.data;
};
