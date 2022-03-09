import React from "react";
import styled from "@emotion/styled";

const ItemWrap = styled.div`
  padding: 5px;
  border: 1px solid red;
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

type ItemProps = {
  serviceId?: string;
  name?: string;
  openTime: string;
  closeTime: string;
  priceMonth: number;
  classInfo: string;
  comedor: boolean;
  phone: number;
  email: string;
  capacity: number;
};

const ItemKindergarden = ({
  serviceId,
  name,
  openTime,
  closeTime,
  priceMonth,
  classInfo,
  comedor,
  phone,
  email,
  capacity,
}: ItemProps) => {
  const addToMyList = () => {
    //llamar a match route new_match,
    // con el id de serviceId
  };
  return (
    <div>
      <p>Name: {name} </p>
      <p>openTime: {openTime}</p>
      <p>closeTime: {closeTime}</p>
      <p>priceMonth: {priceMonth}</p>
      <p>classInfo: {classInfo}</p>
      <p>comedor:{comedor}</p>
      <p>phone: {phone}</p>
      <p>email:{email}</p>
      <p>capacity:{capacity}</p>

      <button onClick={addToMyList}>MATCH</button>
    </div>
  );
};

export default ItemKindergarden;
