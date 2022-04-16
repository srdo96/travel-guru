import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Booking from "../../Booking/Booking";

const TitleCard = ({ item, handleBooking }) => {
  const { name, desc } = item;

  return (
    <div>
      <h1 className="text-7xl font-bold">{name}</h1>
      <p>{desc}</p>
      <button
        onClick={() => handleBooking()}
        className="bg-yellow-500
      p-2 rounded-lg text-black mt-2"
      >
        Booking
      </button>
    </div>
  );
};

export default TitleCard;
