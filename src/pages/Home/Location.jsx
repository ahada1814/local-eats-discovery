import { useContext, useEffect, useState } from "react";
import ResturantsCards from "../../components/ResturantCards/ResturantsCards";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";
import { fetchRestaurants } from "../../hooks/api";

const Location = ({ filteredRestaurantsState }) => {
  const { filteredRestaurants } = useContext(AuthContext);
  const [restaurants, setRestaurants] = useState([]);

  // console.log(selectedPlace);

  useEffect(() => {
    if (!filteredRestaurants.length) {
      fetchRestaurants()
        .then((data) => {
          setRestaurants(data);
        })
        .catch((error) => {
          console.error("Error fetching restaurants:", error);
        });
    }
  }, [filteredRestaurants]);

  return (
    <>
      {filteredRestaurants && !filteredRestaurantsState.length
        ? filteredRestaurants.map((restaurant) => (
            <ResturantsCards key={restaurant._id} restaurant={restaurant} />
          ))
        : filteredRestaurantsState.length > 0
        ? filteredRestaurantsState.map((restaurant) => (
            <ResturantsCards key={restaurant._id} restaurant={restaurant} />
          ))
        : restaurants.map((restaurant) => (
            <ResturantsCards key={restaurant._id} restaurant={restaurant} />
          ))}
    </>
  );
};

export default Location;
