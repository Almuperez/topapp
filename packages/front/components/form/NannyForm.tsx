import React from "react";
import { useForm } from "react-hook-form";

const NannyForm = () => {
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
      <select {...register("Género", { required: true })}>
        <option value="Femenino,Masculino">Femenino,Masculino</option>
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
        placeholder="Precio por hora"
        {...register("Precio por hora", { required: true })}
      />
      <input
        type="text"
        placeholder="Foto"
        {...register("Foto", { required: true })}
      />

      <input type="submit" />
    </form>
  );
};

export default NannyForm;
