import { useContext } from "react";
import ResturantsCards from "../../components/ResturantCards/ResturantsCards";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";

const Location = ({ filteredRestaurantsState }) => {
  const { filteredRestaurants, restaurants } = useContext(AuthContext);

  // console.log(restaurants);
  // console.log(filteredRestaurants);
  console.log(filteredRestaurantsState);

  return (
    <>
      {
        // Show default restaurants if both filteredRestaurants and filteredRestaurantsState are falsy
        filteredRestaurants.length == 0 && filteredRestaurantsState.length == 0
          ? restaurants?.map((restaurant) => (
              <ResturantsCards key={restaurant._id} restaurant={restaurant} />
            ))
          : // Show filteredRestaurants if it exists and filteredRestaurantsState has no items
          filteredRestaurants && !filteredRestaurantsState.length
          ? filteredRestaurants?.map((restaurant) => (
              <ResturantsCards key={restaurant._id} restaurant={restaurant} />
            ))
          : // Show filteredRestaurantsState if it exists
            filteredRestaurantsState?.map((restaurant) => (
              <ResturantsCards key={restaurant._id} restaurant={restaurant} />
            ))
      }

      {/* {filteredRestaurants && !filteredRestaurantsState.length
        ? filteredRestaurants.map((restaurant) => (
            <ResturantsCards key={restaurant._id} restaurant={restaurant} />
          ))
        : filteredRestaurantsState.length > 0
        ? filteredRestaurantsState.map((restaurant) => (
            <ResturantsCards key={restaurant._id} restaurant={restaurant} />
          ))
        : restaurants.map((restaurant) => (
            <ResturantsCards key={restaurant._id} restaurant={restaurant} />
          ))} */}
       {/* {restaurants.map((restaurant) => (
            <ResturantsCards key={restaurant._id} restaurant={restaurant} />
          ))} */}
    </>
  );
};

export default Location;
