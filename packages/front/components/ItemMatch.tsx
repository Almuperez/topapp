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
  nannyId?: string;
  kindergardenId?: string;
  parentId?: string;
  totalPrice: number;
  hasContacted: boolean;
  hasBooked: boolean;
};

const ItemMatch = ({
  nannyId,
  kindergardenId,
  parentId,
  totalPrice,
  hasContacted,
  hasBooked,
}: ItemProps) => {
  return (
    <div>
      <p>Name: {name} </p>
      <p>nannyId:{nannyId}</p>
      <p>kindergardenId:{kindergardenId}</p>
      <p>parentId:{parentId}</p>
      <p>totalPrice:{totalPrice}</p>
      <p>hasContact:{hasContacted ? "si" : "no"} </p>
      <p>hasBooked:{hasBooked ? "si" : "no"}</p>
    </div>
  );
};

export default ItemMatch;
