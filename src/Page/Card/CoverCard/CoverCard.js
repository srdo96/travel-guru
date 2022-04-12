import React from "react";

const CoverCard = ({ info, handleTitle }) => {
  const { name, img } = info;
  console.log(img);
  return (
    <div className="w-72 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
      <div onClick={() => handleTitle(info)} className="">
        <img className="rounded-t-lg" src={img} alt="" />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default CoverCard;
