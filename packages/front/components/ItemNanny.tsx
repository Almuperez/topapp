import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getUserId } from "../lib/redux/store";

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
  serviceId?: string;
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
  serviceId,
  price,
  name,
  dateOfBirth,
  gender,
  // availability,
  location,
  phone,
  email,
}: ItemProps) => {
  //
  const userId = useSelector(getUserId);
  console.log(userId);
  const addToMyList = () => {
    //llamar a match route new_match,
    // con el id de serviceId
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

      <Button onClick={addToMyList}>MATCH</Button>
    </ItemWrap>
  );
};

export default ItemNannie;
