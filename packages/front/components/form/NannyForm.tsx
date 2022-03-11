import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addNanny } from "../../lib/api";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const NannyForm = () => {
  const [item, setItem] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (item) => {
    console.log("item", item);
    const parent = await addNanny(item);
    reset();
  });

  return (
    <FormControl onSubmit={handleSubmit(onSubmit)}>
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

      <button onClick={onSubmit} type="button">
        Add nanny
      </button>
    </FormControl>
  );
};

export default NannyForm;
