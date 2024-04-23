import { Link, useParams } from "react-router-dom";
import CommonBannar from "../../Restaurant/CommonBannar";
import logo from "../../../assets/logo 1.png";
import { useEffect, useState } from "react";

export const ViewMenu = () => {
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
          className="text-white w-40 hover:scale-90 duration-200 absolute top-4 left-4"
        />
      </Link>
      <div className="bg-[#F5F5F5] w-[65%] h-[82%]  mx-auto  rounded-lg py-10">
        <div>
          {/* banner section */}
          <CommonBannar restaurants={restaurants} />

          <div className="flex justify-center items-center gap-5 mt-5">
            {/* Full Menu Section */}
          </div>
        </div>
      </div>
    </div>
  );
};
