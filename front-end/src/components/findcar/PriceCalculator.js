import React from "react";


function PriceCalculator(distance, duration) {
  // Replace this with your own pricing algorithm
  const pricePerMile = 5;
  const pricePerMinute = 1.3;
  const miles = distance / 1609.34;
  const minutes = duration / 60;
  const price = (miles * pricePerMile) + (minutes * pricePerMinute);
  return price.toFixed(2);
}

  

export default PriceCalculator;

