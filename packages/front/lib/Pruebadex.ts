import { createStore, createHook } from "react-sweet-state";

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    count: 0,
  },
  // actions that trigger store mutation
  actions: {
    increment:
      () =>
      //high order function : son funciones que reciben como parametro una funcion o que devuelven una funcion
      ({ setState, getState }) => {
        // mutate state synchronously, modifica ele stado actual de nuestra appp llamando getState
        setState({
          count: getState().count + 1,
        });
      },
  },
  // optional, mostly used for easy debugging. generamos un counter para poder usarlo donde quiera
  name: "counter",
});

//si importamos y exportamos el createHook se peude llamar desde otras acciones y devolvera todo lo que tenga useCounter

export const useCounter = createHook(Store);
