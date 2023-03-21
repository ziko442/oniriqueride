// import React from "react";


export function PriceCalculator(pricePerMile, pricePerMinute, miles, minutes) {
  // Replace this with your own pricing algorithm

  // const miles = distance / 1609.34;
  // const minutes = duration / 60;
  const price = (miles * pricePerMile) + (minutes * pricePerMinute);
  return price.toFixed(2);
  // return ;
}

