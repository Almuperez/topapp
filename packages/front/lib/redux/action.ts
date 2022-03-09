import React from "react";

//import { ADD_USER_INFO } from "./store";

// //Redux action generator

// //hago esta funcion para el action creator: crear la accion para llamarlo desde thunk. siempre va necesitar un type y una variable que es accion (en este caso userid y name)
// export const addUserInfo = ({ userId, name }) => ({
//     type: ADD_USER_INFO,
//     userId,
//     name,
//   });

//las acciones meten cosas en el store
// export const NewMatch = (match) => {
//   console.log("Adding match");
//   return {
//     type: "ADDNANIE",
//     match,
//   };
// };

// THUNK: Call API to save an ingredient and dispatch a addItem() action
//Con SaveOnServer devuelve una funcion que hace un dispatch de las acciones indicadas.
// export const saveOnServer = () => {
//     console.log('Saving on server...');
//     return async (dispatch) => {
//       const saveMatch = await getMatch();
//       dispatch(newMatch(saveIng));
//     };
//   };
