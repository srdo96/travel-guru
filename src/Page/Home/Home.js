import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-6">
        <div className="grid grid-cols-2"></div>
        <div className="grid grid-cols-4">
          {data.map((info) => (
            <Card key={info.id} info={info}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
