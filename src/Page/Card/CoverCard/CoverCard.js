import React from "react";

const CoverCard = ({ info, handleTitle }) => {
  const { name, img } = info;
  console.log(img);
  return (
    <div className="w-72 max-w-sm  shadow-inner">
      <div onClick={() => handleTitle(info)} className="relative ">
        <img className="rounded shadow-xl" src={img} alt="" />
        <h3 className="absolute bottom-9 left-5 text-4xl text-white font-normal">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CoverCard;
