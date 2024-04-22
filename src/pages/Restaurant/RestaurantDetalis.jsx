import CommonAddress from "./CommonAddress";
import CommonBannar from "./CommonBannar";
import { Link } from "react-router-dom";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo 1.png";

const RestaurantDetalis = () => {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_API}single-restaurant/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }
        return response.json();
      })
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, [id]);

  return (
    <div className="bgImg flex justify-center relative items-center">
      <Link to="/">
        <img
          src={logo}
          className="text-white w-24 md:w-40 hover:scale-90 duration-200 absolute top-4 left-4"
        />
      </Link>
      <div className="bg-[#F5F5F5] w-10/12 h-full mt-32 lg:w-[65%] lg:h-[82%]  mx-auto  rounded-lg py-10">
        <div>
          {/* banner section */}
          <CommonBannar restaurants={restaurants} />

          <div className="flex flex-col lg:flex-row justify-center mx-5 lg:mx-0 items-center gap-5 mt-5">
            {/* address section */}
            <CommonAddress restaurants={restaurants} />
            <div className="w-[55%] ">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetalis;
