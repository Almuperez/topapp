import { createSelector } from "reselect";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {
  user: { id: null, name: "" },
  match: [
    {
      _id: 0,
      nannyId: "",
      parentId: "",
    },
  ],
};

//action type DEFINIFO EN LINEA 30
const ADD_USER_INFO = "user/addUserInfo";

//la raiz del redux. Esta funcion para decir lo que voy hacer con el estado
function rootReducer(state = initState, action) {
  console.log(state);
  console.log(action);
  //crear los tipos
  switch (action.type) {
    case ADD_USER_INFO:
      return {
        ...state,
        //al hacer dispatch tendre que meterle como propiedades userid y name
        user: { id: action.userId, name: action.name },
      };

    default:
      return state;
  }
}
//hago esta funcion para el action creator: crear la accion para llamarlo desde thunk. siempre va necesitar un type y una variable que es accion (en este caso userid y name)
export const addUserInfo = ({ userId, name }) => ({
  type: ADD_USER_INFO,
  userId,
  name,
});

//selector: llamo a una funcion para que me de algo especifico como por ejemplo el id del padre
export const getUserInfo = (state) => {
  return state.user;
};
//le pasas el selector que tienes y lo que retorna
export const getUserId = createSelector(getUserInfo, (user) => {
  return user.id;
});

export const store = createStore(rootReducer, composeWithDevTools());

//redux es una funcion que recibe accion y estado, y devuelve un nuevo estado
//Que la store englobe todo.

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
