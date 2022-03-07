import React, { useState } from "react";
//import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { addParent } from "../../lib/api";

const ParentForm = () => {
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
