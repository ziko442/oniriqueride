import React, { useState } from "react";
import axios from "axios";
import MapboxAutocomplete from "react-mapbox-autocomplete";

const API_KEY = process.env.REACT_APP_MAPBOX;

async function getTripInfo(startAddress, endAddress) {
  try {
    // Convert start and end addresses to coordinates
    const startResponse = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(startAddress)}.json?access_token=${API_KEY}`
    );
    const endResponse = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(endAddress)}.json?access_token=${API_KEY}`
    );

    const startCoords = startResponse.data.features[0].center;
    const endCoords = endResponse.data.features[0].center;

    // Calculate trip distance, duration, and price
    const response = await axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${startCoords[0]},${startCoords[1]};${endCoords[0]},${endCoords[1]}?access_token=${API_KEY}`
    );

    if (!response.data.routes || !response.data.routes[0]) {
      throw new Error("Invalid response from Mapbox API");
    }

    const distance = response.data.routes[0].distance * 0.000621371; // Convert meters to miles
    const duration = response.data.routes[0].duration / 60; // Convert seconds to minutes
    const price = (distance * 1.314) + (duration * 0.564); // Assuming a price of $1.314 per mile and a price of $0.564 per minute

    return { distance, duration, price };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while processing your request" };
  }
}


function App() {
  const [startAddress, setStartAddress] = useState("");
  const [endAddress, setEndAddress] = useState("");
  const [tripInfo, setTripInfo] = useState(null);

  const handleStartAddressSelect = (address) => {
    setStartAddress(address);
  };

  const handleEndAddressSelect = (address) => {
    setEndAddress(address);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tripInfo = await getTripInfo(startAddress, endAddress);
    setTripInfo(tripInfo);
    console.log(tripInfo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Start Address:
          <MapboxAutocomplete
            publicKey={API_KEY}
            inputClass="form-control"
            onSuggestionSelect={handleStartAddressSelect}
            country="us"
            resetSearch={false}
          />
        </label>
        <br />
        <label>
          End Address:
          <MapboxAutocomplete
            publicKey={API_KEY}
            inputClass="form-control"
            onSuggestionSelect={handleEndAddressSelect}
            country="us"
            resetSearch={false}
          />
        </label>
        <br />
        <button type="submit">Get Trip Info</button>
      </form>
      {tripInfo && (
        <div>
          <p>Distance: {tripInfo.distance.toFixed(2)} miles</p>
          <p>Duration: {tripInfo.duration.toFixed(2)} minutes</p>
          <p>Price: ${tripInfo.price.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
