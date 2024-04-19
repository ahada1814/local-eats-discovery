import { useEffect, useState } from "react";
import ResturantsCards from "../../components/ResturantCards/ResturantsCards";

const Location = ({selectedPlace, filteredRestaurants}) => {
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
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, [selectedPlace]);


  return (
    <>
    <>
      {filteredRestaurants.length > 0
        ? filteredRestaurants.map((restaurant) => (
            <ResturantsCards key={restaurant._id} restaurant={restaurant} />
          ))
        : restaurants.map((restaurant) => (
            <ResturantsCards key={restaurant._id} restaurant={restaurant} />
          ))}
    </>
      {/* {restaurants?.map((restaurant) => (
        <ResturantsCards key={restaurant._id} restaurant={restaurant} />
      ))} */}
    </>
  );
};

export default Location;

// import { useEffect, useState } from "react";
// import ResturantsCards from "../../components/ResturantCards/ResturantsCards";

// const Location = ({ selectedPlace }) => {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     // Fetch restaurant data from your API
//     fetch(`${import.meta.env.VITE_REACT_API}all-restaurants`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch restaurants");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Filter restaurants based on selected place
//         const filteredRestaurants = filterRestaurantsByDistance(
//           selectedPlace.latitude,
//           selectedPlace.longitude,
//           100,
//           data
//         ); // Assuming max distance of 10 kilometers
//         // Set the filtered restaurant data to the state
//         setRestaurants(filteredRestaurants);
//       })
//       .catch((error) => {
//         console.error("Error fetching restaurants:", error);
//       });
//   }, [selectedPlace]);

//   // Function to filter restaurants based on distance
//   function filterRestaurantsByDistance(
//     selectedLat,
//     selectedLng,
//     maxDistance,
//     restaurants
//   ) {
//     const filteredRestaurants = restaurants.filter((restaurant) => {
//       const earthRadius = 6371; // Earth radius in kilometers
//       const lat1 = selectedLat;
//       const lon1 = selectedLng;
//       const lat2 = restaurant.location.latitude;
//       const lon2 = restaurant.location.longitude;

//       const dLat = toRadians(lat2 - lat1);
//       const dLon = toRadians(lon2 - lon1);
//       const a =
//         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(toRadians(lat1)) *
//           Math.cos(toRadians(lat2)) *
//           Math.sin(dLon / 2) *
//           Math.sin(dLon / 2);
//       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//       const distance = earthRadius * c;

//       return distance <= maxDistance;
//     });

//     return filteredRestaurants;
//   }

//   function toRadians(degrees) {
//     return degrees * (Math.PI / 180);
//   }

//   return (
//     <>
//       {restaurants.map((restaurant) => (
//         <ResturantsCards key={restaurant._id} restaurant={restaurant} />
//       ))}
//     </>
//   );
// };

// export default Location;