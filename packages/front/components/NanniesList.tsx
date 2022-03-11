// TRAERME FUNCION GETNANNIES
// USE EFFECT
import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { getNannies } from "../lib/api";
import ItemNannie from "./ItemNanny";
import { Heading, Stack, Container, Text, Button } from "@chakra-ui/react";

const Nannies = () => {
  const [nannies, setNannies] = useState([]);

  useEffect(() => {
    getNannies()
      .then((nannies) => {
        console.log("nannies ===>", typeof nannies, Array.isArray(nannies));
        setNannies(nannies);
      })
      .catch((err) => {
        console.log("error ==>", err);
      });
  }, []);

  return (
    <Card className="card">
      <div className="card-body">
        <Heading margin="15" as="h4" size="md" color="#322659">
          <Text as="em">Tenemos un totlal de {nannies.length} nannies</Text>
        </Heading>
        <p className="card-text"></p>
        {nannies.map((nanny) => {
          console.log("one nanny ==>", nanny);
          return (
            <ItemNannie
              nannyId={nanny._id}
              name={nanny.name}
              price={nanny.priceHour}
              dateOfBirth={nanny.dateOfBirth}
              gender={nanny.gender}
              // availability={nanny.availability}
              // location={nanny.location}
              phone={nanny.phone}
              email={nanny.email}
            />
          );
        })}
      </div>
    </Card>
  );
};

export default Nannies;

<Heading margin="15" as="h4" size="md" color="#322659">
  <Text as="em">Bienvenido a Topapp, te ayudamos a conciliar</Text>
</Heading>;
