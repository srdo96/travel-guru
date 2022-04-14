import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TitleCard = ({ info }) => {
  const { name, desk } = info;
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-7xl font-bold">{name}</h1>
      <p>{desk}</p>
      <button
        onClick={() => {
          navigate("/booking");
        }}
        className="bg-yellow-500
      p-2 rounded-lg text-black mt-2"
      >
        Booking
      </button>
    </div>
  );
};

export default TitleCard;
