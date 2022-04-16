import React, { useContext } from "react";
import TitleCard from "../Card/TitleCard/TitleCard";
import useHook from "../newHook/useHook";
import { BookingItemContext } from "../Home/Home";

const Booking = () => {
  // const { service, setService } = useHook();
  // console.log("book", service);
  const myBooking = useContext(BookingItemContext);
  console.log("Booking", myBooking);
  // console.log("New booking Item:", selectedItem);
  // console.log("props", props);
  return (
    <div className="grid grid-cols-2">
      {/* grid 1 */}
      <div>{/* <TitleCard key={item.id} item={item}></TitleCard> */}</div>

      {/* grid 2 */}
      <div className="border">
        <div className="h-screen bg-slate-50 flex justify-center items-center w-50">
          <form>
            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-1 text-gray-600 font-semibold"
                  >
                    Origin
                  </label>
                  <input
                    type="text"
                    className="bg-indigo-50 px-4 py-3  outline-none rounded-md w-full"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-1 text-gray-600 font-semibold"
                  >
                    Destination
                  </label>
                  <input
                    type="text"
                    className="bg-indigo-50 px-4 py-3 outline-none rounded-md w-full"
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <label
                      for="email"
                      className="block mb-1 text-gray-600 font-semibold"
                    >
                      Form
                    </label>
                    <input
                      type="text"
                      className="bg-indigo-50 px-4 py-3 mr-4 outline-none rounded-md w-32"
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-1 text-gray-600 font-semibold"
                    >
                      To
                    </label>
                    <input
                      type="text"
                      className="bg-indigo-50 px-4 py-3 mr-4 outline-none rounded-md w-32"
                    />
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full bg-yellow-500  py-2 rounded-md  tracking-wide">
                Start Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
