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
  price?: number;
  name?: string;
  dateOfBirth?: string;
  gender?: string;
};

const Item = ({ serviceId, price, name, dateOfBirth, gender }: ItemProps) => {
  const addToMyList = () => {
    //llamar a match route new_match,
    // con el id de serviceId
  };
  return (
    <div>
      <p>Name: {name} </p>
      <p>price: {price}</p>
      <p>price: {price}</p>
      <button onClick={addToMyList}>MATCH</button>
    </div>
  );
};

export default Item;
