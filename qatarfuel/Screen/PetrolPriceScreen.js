import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";

const PetrolPriceScreen = () => {
  const [petrolPrices, setPetrolPrices] = useState([]);
  const apiKey = "xPLbhm7k2qBv1eeqCz8qGBT5OFVADeym"; // Replace with your actual API key
  const countryCode = "QAT"; // Replace with the desired country code
  const fuelType = "diesel"; // Replace with the desired fuel type
  const axiosInstance = axios.create({
    timeout: 5000, // Adjust the timeout as needed
    maxRedirects: 0, // Disable redirects
  });
  const fetchPetrolPrices = async () => {
    try {
      const response = await axiosInstance.get(
        `https://api.tomtom.com/traffic/1/petrolPrices/${countryCode}/${fuelType}.json?key=${apiKey}`
      );
      setPetrolPrices(response.data);
    } catch (error) {
      console.error("Error fetching petrol prices:", error);
    }
  };

  useEffect(() => {
    fetchPetrolPrices();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Petrol Prices</Text>
      {petrolPrices.map((station, index) => (
        <View key={index}>
          <Text>Station Name: {station.name}</Text>
          <Text>Price: {station.fuelPrice}</Text>
          {/* Add more information as needed */}
        </View>
      ))}
      <Button title="Refresh Prices" onPress={fetchPetrolPrices} />
    </View>
  );
};

export default PetrolPriceScreen;
