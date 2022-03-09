import React, { useState } from "react";
//import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addParent } from "../../lib/api";
import { addUserInfo } from "../../lib/redux/store";

const ParentForm = () => {
  //useDispatch: es una funcion que recibe un argumento que es la accion. Yo te mando el userinfo que he creado como action creator en la store, guardamelo en el estado global.
  const dispatch = useDispatch();

  const [item, setItem] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (item) => {
    console.log("item", item);
    const parent = await addParent(item);
    //una vez enviar el formulario y añades el padre haces un dispatch para que te guarde la info del id y el nombre
    dispatch(addUserInfo({ userId: parent._id, name: parent.name }));
    reset();
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nombre"
        {...register("name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Teléfono"
        {...register("phone", { required: true, maxLength: 9 })}
      />
      <input
        type="text"
        placeholder="Localización"
        {...register("location", { required: true })}
      />
      {/* <input
        type="number"
        placeholder="Número de hijos"
        {...register("Número de hijos", { required: true })}
      /> */}
      <input
        type="text"
        placeholder="Información adicional"
        {...register("otherInformation", { maxLength: 50 })}
      />

      <button onClick={onSubmit} type="button">
        Add parent
      </button>
    </form>
  );
};

export default ParentForm;
