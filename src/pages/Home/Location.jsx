import { useEffect, useState } from "react";
import ResturantsCards from "../../components/ResturantCards/ResturantsCards";

const Location = ({ selectedPlace, filteredRestaurants }) => {
  const [restaurants, setRestaurants] = useState([]);

  // console.log(selectedPlace);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_API}all-restaurants`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }
        return response.json();
      })
      .then((data) => {
        setRestaurants(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, [selectedPlace]);

  return (
    <>
      {filteredRestaurants.length > 0
        ? filteredRestaurants.map((restaurant) => (
            <ResturantsCards key={restaurant._id} restaurant={restaurant} />
          ))
        : restaurants.map((restaurant) => (
            <ResturantsCards key={restaurant._id} restaurant={restaurant} />
          ))}
    </>
  );
};

export default Location;
