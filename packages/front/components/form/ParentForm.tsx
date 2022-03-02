import React from "react";
//import styled from 'styled-components';
import { useForm } from "react-hook-form";

const ParentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nombre"
        {...register("Nombre", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Teléfono"
        {...register("Teléfono", { required: true, maxLength: 9 })}
      />
      <input
        type="text"
        placeholder="Localización"
        {...register("Localización", { required: true })}
      />
      <input
        type="number"
        placeholder="Número de hijos"
        {...register("Número de hijos", { required: true })}
      />
      <input
        type="text"
        placeholder="Información adicional"
        {...register("Información adicional", { maxLength: 50 })}
      />

      <input type="submit" />
    </form>
  );
};

export default ParentForm;
