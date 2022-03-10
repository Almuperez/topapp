import React, { useEffect, useState } from "react";
import { getMatchs } from "../lib/api";
import { Card } from "react-bootstrap";
import ItemMatch from "./ItemMatch";

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
        <h3 className="card-title">
          TENEMOS UN TOTAL DE {matchs.length} NANNIES
        </h3>
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
      </div>
    </Card>
  );
};

export default Matchs;
