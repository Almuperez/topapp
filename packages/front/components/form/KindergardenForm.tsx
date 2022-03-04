import React from "react";
import { useForm } from "react-hook-form";

const GuarderiaForm = () => {
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
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("Mobile number", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      <input
        type="number"
        placeholder="Años"
        {...register("Años", { required: true })}
      />
      <select {...register("Tipo", { required: true })}>
        <option value="Privada, Pública, Ludoteca">
          Privada, Pública, Ludoteca
        </option>
      </select>
      <input
        type="text"
        placeholder="Location"
        {...register("Location", { required: true })}
      />
      <input
        type="datetime"
        placeholder="Calendario"
        {...register("Calendario", { required: true })}
      />
      <input
        type="number"
        placeholder="Precio por mes"
        {...register("Precio por mes", { required: true })}
      />
      <select {...register("Comedor", { required: true })}>
        <option value="Si, No">Si, No</option>
      </select>
      <input
        type="number"
        placeholder="Capacidad"
        {...register("Capacidad", { required: true })}
      />

      <input type="submit" />
    </form>
  );
};

export default GuarderiaForm;
