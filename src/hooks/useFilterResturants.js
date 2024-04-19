export const filterRestaurantsByDistance = (restaurants, selectLat, selectLong, distance) => {

    console.log('ha kaj kore');
    const earthRadius = 6371; // Earth radius in kilometers
  
    const filtered = restaurants.filter((restaurant) => {
      const { latitude, longitude } = restaurant.location;

      const dLat = toRadians(latitude - selectLat);
      const dLon = toRadians(longitude - selectLong);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(selectLat)) *
          Math.cos(toRadians(latitude)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distanceBetween = earthRadius * c;
  
      // console.log(`Distance: ${distanceBetween}`);

      return distanceBetween <= distance;
    });
  
    return filtered;
  };
  
  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };
