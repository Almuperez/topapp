import React, { useEffect, useState } from "react";
import { getMatchs } from "../lib/api";
import { Card } from "react-bootstrap";
import ItemMatch from "./ItemMatch";
import { Heading, Stack, Container, Text, Button } from "@chakra-ui/react";
import { MdCall } from "react-icons/md";

const Matchs = () => {
  const [matchs, setMatchs] = useState([]);

  useEffect(() => {
    getMatchs()
      .then((matchs) => {
        setMatchs(matchs);
      })
      .catch((err) => {
        console.log("error ===>", err);
      });
  }, []);

  return (
    <Card className="card">
      <div className="card-body">
        <Heading margin="15" as="h4" size="md" color="#322659">
          <Text as="em">Contacta con tu macth</Text>
        </Heading>
        <p className="card-text"></p>
        {matchs.map((match) => {
          console.log("one match ==>", match);
          return (
            <ItemMatch
              nannyId={match.serviceId}
              kindergardenId={match.serviceId}
              parentId={match.serviceId}
              totalPrice={match.totalPrice}
              hasContacted={match.hasContacted}
              hasBooked={match.hasBooked}
            />
          );
        })}
        <Stack direction="row" spacing={4}>
          <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">
            Call nanny
          </Button>
        </Stack>
      </div>
    </Card>
  );
};

<Matchs />;

export default Matchs;
