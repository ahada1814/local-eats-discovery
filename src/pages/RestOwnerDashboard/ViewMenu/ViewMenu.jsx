import { Link } from "react-router-dom";
import CommonBannar from "../../Restaurant/CommonBannar";
import logo from "../../../assets/logo 1.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders/AuthProviders";
import { fetchRestaurants } from "../../../hooks/api";

export const ViewMenu = () => {
  const { user } = useContext(AuthContext);
  const [restaurants, setRestaurants] = useState([]);

  console.log(restaurants);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedRestaurants = await fetchRestaurants();
        // Filter restaurants based on the ownerEmail matching the logged-in user's email
        const userRestaurants = fetchedRestaurants.filter(
          (restaurant) => restaurant.ownerEmail === user.email
        );
        setRestaurants(userRestaurants);
      } catch (error) {
        // Handle error here
      }
    };

    fetchData();
  }, [user.email]);

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
            {restaurants.map((restaurant) => (
              <div key={restaurant._id}>
                <h2>{restaurant.restaurant_name}</h2>
                <ul>
                  {restaurant.food_items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
