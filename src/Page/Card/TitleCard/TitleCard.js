import React from "react";
import { Link } from "react-router-dom";

const TitleCard = ({ info }) => {
  const { name, desk } = info;
  return (
    <div>
      <h1 className="text-7xl font-bold">{name}</h1>
      <p>{desk}</p>
      <button
        className="bg-yellow-500
      p-2 rounded-lg text-white mt-2"
      >
        Booking
      </button>
    </div>
  );
};

export default TitleCard;
