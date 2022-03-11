import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addParent } from "../../lib/api";
import { addUserInfo } from "../../lib/redux/store";
import styled from "styled-components";
const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const CustomInput = styled.input`
  width: 200px;
  height: 32px;
  padding: 0px 16px;
  margin: 0 8px;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-sizing: border-box;
`;

const CustomBtn = styled.button`
  width: 200px;
  height: 32px;
  margin: 0 8px;
  border: 0;
  border-radius: 4px;
  background-color: lightgreen;
  &:hover {
    background-color: #69d769;
  }
`;

const ErrorMessageText = styled.p`
  font-size: 12px;
  margin: 4px 8px;
  color: #ff4d4f;
`;

const errorColor = "#ff4d4f";

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
    <FlexForm onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Column>
          <CustomInput
            type="text"
            placeholder="Nombre"
            {...register("name", { required: true, maxLength: 80 })}
            style={{
              borderColor:
                errors.name?.type === "required" ? errorColor : "lightgray",
            }}
          />
          {errors.name?.type === "required" && (
            <ErrorMessageText>Campo requerido</ErrorMessageText>
          )}
        </Column>
        <Column>
          <CustomInput
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            style={{
              borderColor:
                errors.email?.type === "required" ? errorColor : "lightgray",
            }}
          />
          {errors.email?.type === "required" && (
            <ErrorMessageText>Campo requerido</ErrorMessageText>
          )}
        </Column>
        <Column>
          <CustomInput
            type="tel"
            placeholder="Teléfono"
            {...register("phone", { required: true, maxLength: 9 })}
            style={{
              borderColor:
                errors.prhone?.type === "required" ? errorColor : "lightgray",
            }}
          />
          {errors.phone?.type === "required" && (
            <ErrorMessageText>Campo requerido</ErrorMessageText>
          )}
        </Column>
        <Column>
          <CustomInput
            type="text"
            placeholder="Localización"
            {...register("location", { required: true })}
            style={{
              borderColor:
                errors.location?.type === "required" ? errorColor : "lightgray",
            }}
          />
          {errors.location?.type === "required" && (
            <ErrorMessageText>Campo requerido</ErrorMessageText>
          )}
        </Column>
        {/* <input
        type="number"
        placeholder="Número de hijos"
        {...register("Número de hijos", { required: true })}
      /> */}
        <Column>
          <CustomInput
            type="text"
            placeholder="Información adicional"
            {...register("otherInformation", { required: true, maxLength: 50 })}
            style={{
              borderColor:
                errors.otherInformation?.type === "required"
                  ? errorColor
                  : "lightgray",
            }}
          />
          {errors.otherIndomation?.type === "required" && (
            <ErrorMessageText>Campo requerido</ErrorMessageText>
          )}
        </Column>
        <Row>
          <CustomBtn onClick={onSubmit} type="button">
            Add parent
          </CustomBtn>
        </Row>
      </Row>
    </FlexForm>
  );
};

export default ParentForm;
