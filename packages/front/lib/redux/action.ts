//Redux action generator
import { getParent, getNannies, newMatch } from "../api";

//las acciones meten cosas en el store
export const NewMatch = (match) => {
  console.log("Adding match");
  return {
    type: "ADDNANIE",
    match,
  };
};

// THUNK: Call API to save an ingredient and dispatch a addItem() action
//Con SaveOnServer devuelve una funcion que hace un dispatch de las acciones indicadas.
// export const saveOnServer = () => {
//     console.log('Saving on server...');
//     return async (dispatch) => {
//       const saveMatch = await getMatch();
//       dispatch(newMatch(saveIng));
//     };
//   };
