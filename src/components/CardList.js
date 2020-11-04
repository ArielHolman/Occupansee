import React from "react";
import Card from "./Card";

const CardList = ({businesses}) => {
  return (
    <div>
      {businesses.map((business, i) => {
        return (
          <Card
            key={i}
            id={businesses[i].id}
            name={businesses[i].name}
            address={businesses[i].address}
          />
        );
      })}
    </div>
  );
};

export default CardList;
