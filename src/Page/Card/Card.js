import React from "react";

const Card = ({ info }) => {
  const { name, img } = info;
  console.log(img);
  return (
    <div>
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
        <div class="p-5">
          <img class="rounded-t-lg" src={img} alt="" />
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
