import React from "react";


export function calculatePrice(distance, duration) {
  // Replace this with your own pricing algorithm
  const pricePerMile = 0.50;
  const pricePerMinute = 0.10;
  const miles = distance / 1609.34;
  const minutes = duration / 60;
  const price = (miles * pricePerMile) + (minutes * pricePerMinute);
  return price.toFixed(2);
}
