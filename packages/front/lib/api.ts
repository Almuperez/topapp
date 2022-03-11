import React from "react";
import axios from "axios";

export const api = axios.create({ baseURL: "http://127.0.0.1:3001" });

//funcion asincrona que me devolvera un await de api.get y añadimos parent. le pedimso que nos devuelva data.
//getparent hace una peticion a axios de mi servidor, cuando se termina de cargar el componente correspondiente
export const getParent = async () => {
  const res = await api.get("/parent");
  console.log(res);
  return res.data;
};

export const addParent = async (data) => {
  console.log("comprobando", data);
  const res = await api.post("/parent", data);
  console.log(res);
  return res.data;
};

export const addChild = async (data) => {
  const res = await api.post("/child", data);
  console.log(res);
  return res.data;
};

export const getNannies = async () => {
  const res = await api.get("/nanny");
  console.log(res);
  return res.data;
};
export const addNanny = async (data) => {
  const res = await api.post("/nanny", data);
  console.log(res);
  return res.data;
};

export const getKindergardens = async () => {
  const res = await api.get("/kindergarden");
  console.log(res);
  return res.data;
};

//post recibe dos argumento: ¿que ruta? y el body, que es data
export const newMatch = async (data) => {
  const res = await api.post("/match", data);
  console.log(res);
  return res.data;
};

export const getMatchs = async () => {
  const res = await api.get("/match");
  console.log(res);
  return res.data;
};
