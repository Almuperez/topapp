import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { newMatch } from "../lib/api";
import { getUserId } from "../lib/redux/store";
import data from "../pages/api/data";

const ItemWrap = styled.div`
  padding: 4px;
  border: 1px solid palevioletred;
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// export type Day = {
//   day: number;
//   start: string;
//   end: string;
// };

type ItemProps = {
  nannyId?: string;
  price?: number;
  name?: string;
  dateOfBirth?: string;
  gender?: string;
  location?: string;
  // availability: [
  //   {
  //     day: Number;
  //     start: String;
  //     end: String;
  //   }
  // ];
  phone: number;
  email: string;
};

const ItemNannie = ({
  nannyId,
  price,
  name,
  dateOfBirth,
  gender,
  // availability,
  location,
  phone,
  email,
}: ItemProps) => {
  //Use selectoy le pide que de todo lo que tenga ene stado global. y el userID es del padre
  const userId = useSelector(getUserId);
  console.log("Id padre", userId);
  console.log("Id nannie", nannyId);
  const addMatch = () => {
    const newMatchInfo = {
      nannyId,
      parentId: userId,
      totalPrice: price,
    };
    newMatch(newMatchInfo)
      .then((res) => {
        console.log("respuesta", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <ItemWrap>
      <p>Name: {name} </p>
      <p>price: {price}</p>
      <p>dateOfBirth: {dateOfBirth}</p>
      <p>gender: {gender}</p>
      {/* <p>availability: {availability}</p> */}
      {/* <p>location: {location} </p> */}
      <p>phone: {phone}</p>
      <p>email:{email}</p>

      <Button onClick={addMatch}>MATCH</Button>
    </ItemWrap>
  );
};

export default ItemNannie;
