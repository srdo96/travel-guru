import React, { useEffect, useState } from "react";
import CoverCard from "../Card/CoverCard/CoverCard";
import TitleCard from "../Card/TitleCard/TitleCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleTitle = (info) => {
    setInfo(info);
  };

  return (
    <div className="mt-44 grid justify-center items-center">
      <div className="grid grid-cols-8">
        <div className=" ml-32 grid col-span-3">
          {<TitleCard key={info.id} info={info}></TitleCard>}
        </div>
        <div className=" ml-11 grid col-span-5 ">
          <div className="flex gap-8">
            {data.map((info) => (
              <CoverCard
                key={info.id}
                info={info}
                handleTitle={handleTitle}
              ></CoverCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
