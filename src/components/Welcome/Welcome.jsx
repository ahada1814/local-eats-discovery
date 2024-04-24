
import React from 'react';

const Welcome = ({ restaurants }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center font-semibold">
        <h1 className="mb-4 text-4xl">
          Welcome <span className="text-orange-400">{restaurants?.restaurant_name}</span>
        </h1>
        <p className="text-lg">Click on the option to Navigate..</p>
      </div>
    </div>
  );
};

export default Welcome;