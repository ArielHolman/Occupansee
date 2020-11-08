import React from "react";
import Card from "./Card";

const CardList = ({ businesses }) => {
  return (
    <div>
      {businesses.map((business, i) => {
        const { id, name, address } = business;

        return <Card key={i} id={id} name={name} address={address} />;
      })}
    </div>
  );
};

export default CardList;
