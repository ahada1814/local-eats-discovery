import CommonAddress from "./CommonAddress";
import CommonBannar from "./CommonBannar";
import food from "../../assets/trending image 1.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantDetalis = () => {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState();
  

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_API}single-restaurants/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched restaurant data to the state
        setRestaurants(data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, []);

  return (
    <div className="bgImg flex justify-center items-center">
      <div className="bg-[#F5F5F5] w-[65%] h-[82%]  mx-auto  rounded-lg py-10">
        <div>
          {/* banner section */}
          <CommonBannar restaurants={restaurants} />

          <div className="flex justify-center items-center gap-5 mt-5">
            {/* address section */}
            <CommonAddress restaurants={restaurants} />
            <div className="w-[55%] ">
              <h5 className="text-3xl font-bold mb-3">Trending Orders</h5>
              <div className="grid grid-cols-3 gap-5">
                {restaurants?.food_items.map((f) => (
                  <div key={f} className="drop-shadow-2xl">
                    <div className="flex justify-center items-center gap-4 bg-white py-2 px-2 rounded-md">
                      <div className="flex flex-col justify-start items-start">
                        <h3 className="text-xl font-semibold">{f.name}</h3>
                        <p className="mt-2 text-gray-600">4 persons</p>
                        <p className="mt-2 text-[#EA6A12] font-semibold">
                          ${f.price}
                        </p>
                      </div>
                      <div>
                        <img src={food} alt="" className="w-[70px]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetalis;
