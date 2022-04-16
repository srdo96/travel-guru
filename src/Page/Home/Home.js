import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Booking from "../Booking/Booking";
import CoverCard from "../Card/CoverCard/CoverCard";
import TitleCard from "../Card/TitleCard/TitleCard";

export const BookingItemContext = React.createContext({});
const Home = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  console.log(selectedItem);
  // console.log(props);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleTitle = (item) => {
    setSelectedItem(item);
  };
  const handleBooking = () => {
    // setSelectedItem();
    console.log("selected for booking:", selectedItem);
    // <Booking
    //   key={selectedItem.id}
    //   selectedItem={selectedItem}
    //   props={props}
    // ></Booking>;
    navigate("/booking");
  };

  return (
    <BookingItemContext.Provider value={selectedItem}>
      <div className="mt-44 grid justify-center items-center">
        <div className="grid grid-cols-8">
          <div className=" ml-32 grid col-span-3">
            {
              <TitleCard
                key={selectedItem.id}
                item={selectedItem}
                handleBooking={handleBooking}
              ></TitleCard>
            }
          </div>
          <div className=" ml-11 grid col-span-5 ">
            <div className="flex gap-8">
              {data.map((item) => (
                <CoverCard
                  key={item.id}
                  item={item}
                  handleTitle={handleTitle}
                ></CoverCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BookingItemContext.Provider>
  );
};

export default Home;
