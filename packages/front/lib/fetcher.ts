import axios from "axios";

export const api_client = axios.create({ baseURL: "http://127.0.0.1:3001" });
// Devolverá http://localhost:3000/
export const frontend_client = axios.create();

export const fetcher = async (resource, init) => {
  // const res = await api_client.get(resource);
  const res = await frontend_client.get(resource);
  return res.data;
};
