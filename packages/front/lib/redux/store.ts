import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {
  match: [
    {
      _id: 0,
      nannyId: "",
      parentId: "",
    },
  ],
};

function routReducer(state = initState, action) {
  console.log(state);
  console.log(action);
  return state;
}

export const store = createStore(routReducer, composeWithDevTools());

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
