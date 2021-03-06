import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { addChild } from "../../lib/api";
import { Heading, Text } from "@chakra-ui/react";

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

const ChildForm = () => {
  const [item, setItem] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (item) => {
    console.log("item", item);
    const parent = await addChild(item);
    reset();
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading margin="15" as="h4" size="md" color="#322659">
        <Text as="em">Indica los datos de tu niñ@/s</Text>
      </Heading>

      <FlexForm onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Column>
            <CustomInput
              type="text"
              placeholder="Nombre"
              {...register("Nombre", { required: true, maxLength: 80 })}
            />
          </Column>
          <Column>
            <select {...register("Fecha de nacimiento", { required: true })}>
              <option value="0 a 1 año">0 a 1 año</option>
              <option value=" 2 a 3 años"> 2 a 3 años</option>
              <option value=" 4 a 5 años"> 4 a 5 años</option>
              <option value=" >5 años"> mayor de 5 años</option>
            </select>
          </Column>

          <Column>
            <select {...register("Género", { required: true })}>
              <option value="Niña">Niña</option>
              <option value=" Niño"> Niño</option>
            </select>
          </Column>

          <Column>
            <CustomInput
              type="text"
              placeholder="Información adicional"
              {...register("Información adicional", { maxLength: 50 })}
            />
          </Column>
        </Row>

        <Row>
          <CustomBtn onClick={onSubmit} type="button">
            Add child
          </CustomBtn>
        </Row>
      </FlexForm>
    </form>
  );
};

export default ChildForm;
