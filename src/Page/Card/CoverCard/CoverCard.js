import React from "react";

const CoverCard = ({ item, handleTitle }) => {
  const { name, img } = item;
  // console.log(img);
  return (
    <div className="w-72 max-w-sm  shadow-inner">
      <div onClick={() => handleTitle(item)} className="relative ">
        <img className="rounded shadow-xl" src={img} alt="" />
        <h3 className="absolute bottom-9 left-5 text-4xl text-white font-normal">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CoverCard;
