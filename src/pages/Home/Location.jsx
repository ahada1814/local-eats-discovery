import { useEffect, useState } from "react";
import ResturantsCards from "../../components/ResturantCards/ResturantsCards";

const Location = () => {
  const [restaurants, setRestaurants] = useState([]);
  console.log(restaurants);

  useEffect(() => {
    // Fetch restaurant data from your API
    fetch(`${import.meta.env.VITE_REACT_API}all-restaurants`)
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
    <>
      {restaurants.map((restaurant) => (
        <ResturantsCards key={restaurant._id} restaurant={restaurant} />
      ))}
    </>
  );
};

export default Location;
