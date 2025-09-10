import cityData from "../defaultCities.json";
import React from "react";
import "../Styles/citiesStyle.css";
import type{ City } from "./CityData"

//Creating props to use App.tsx state
interface propsCities {
  cities: City[];
  setCities: React.Dispatch<React.SetStateAction<City[]>>;
}

/*getting our JSON file with the default cities*/
export const Cities: React.FC<propsCities> = ({ setCities }) => {
 
/*Function that converts the timezone into local time, instead of seeing which timezone the country/city is in
we can now see the local time*/
  const localTime = (timezone: string) => {
    return new Intl.DateTimeFormat("sv-SE", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());
  };

  const AddCity = (city: City) => {
    setCities(prev => [...prev,city]); // Add to App.tsx list
  };

  return (
    <main className="defaultCitiesContainer">
      <ul>
        {cityData.map((city, index) => (
          <li key={index}>
            {city.city}, {city.country} - {localTime(city.timezone)}
            <button onClick={() => AddCity(city)}>&#129505;</button>
          </li>
        ))}
      </ul>
    </main>
  );
};
