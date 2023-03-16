import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const [distance, setDistance] = useState("");

  const calculateDistance = (map, maps) => {
    // Define the origin and destination points
    const origin = new maps.LatLng(37.7749, -122.4194); // San Francisco, CA
    const destination = new maps.LatLng(40.7128, -74.0060); // New York, NY

    // Set up the Distance Matrix service
    const distanceService = new maps.DistanceMatrixService();

    // Define the options for the Distance Matrix request
    const distanceOptions = {
      origins: [origin],
      destinations: [destination],
      travelMode: maps.TravelMode.DRIVING,
    };

    // Call the Distance Matrix service to get the distance
    distanceService.getDistanceMatrix(distanceOptions, (response, status) => {
      if (status === "OK") {
        const distanceInMeters = response.rows[0].elements[0].distance.value;
        const distanceInMiles = distanceInMeters * 0.000621371;
        setDistance(distanceInMiles.toFixed(2));
      }
    });
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAQTGuq4ddkm6xlkOpNmuf26xteC5yTEys" }}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // San Francisco, CA
        defaultZoom={4}
        onGoogleApiLoaded={({ map, maps }) => calculateDistance(map, maps)}
      />
      <p>The distance between San Francisco, CA and New York, NY is {distance} miles.</p>
    </div>
  );
};

export default Map;
