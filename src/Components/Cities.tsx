import cityData from "../defaultCities.json";
import { useState, useEffect } from "react";
import React from "react";
import "../Styles/citiesStyle.css";
import { AddToLocalStorage } from "./Localstorage";


// Component to display the default cities that is imported from the json file

export interface City {
  city: string;
  country: string;
  timezone: string;
}
/*getting our JSON file with the default cities, will be one of our APIs*/
export const Cities: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [selectCity, setSelectedCities] = useState<City[]>([]);
  

  useEffect(() => {
    setCities(cityData);
  }, []);

  /*Function that converts the timezone into local time, instead of seeing which timezone the country/city is in
we can now see the local time*/
  const localTime = (timezone: string) => {
    return new Intl.DateTimeFormat("sv-SE", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());
  };

  const AddSavedCity = (city: City) => {
    const update = [...selectCity, city];
    setSelectedCities(update);
    AddToLocalStorage(update);
    console.log(update);

  };

  return (
    <main className="defaultCitiesContainer">
      <ul>
        {cities.map((city: City, index: number) => (
          <li key={index}>
            {city.city}, {city.country} - {localTime(city.timezone)}
            <button onClick={() => AddSavedCity(city)}>Save</button>
          </li>
        ))}
      </ul>
    </main>
  );
};
