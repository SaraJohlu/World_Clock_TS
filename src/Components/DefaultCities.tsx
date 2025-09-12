import React from "react";
import "../Styles/HomeCitiesStyle.css";
import type { City } from "./CityData";
import defaultCities from "../defaultCities.json";

//Creating props to use App.tsx state
interface propsCities {
  cities: City[];
  setCities: React.Dispatch<React.SetStateAction<City[]>>;
}

/*getting our JSON file with props with the default cities that is already coded in the apps data.*/
export const DefaultCities: React.FC<propsCities> = ({ cities, setCities }) => {
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
    setCities((prev) => {
      // Add to App.tsx list
      const alreadyExists = prev.some(
        (c) => c.city === city.city && c.country === city.country
      );
      if (alreadyExists) return prev;
      return [...prev, city];
    });
  };
// Return the defaultCities container that with Routes will render on App.tsx
  return (
    <main className="defaultCitiesContainer">
      <h3>App provides already existing cities and the timezones for you to save to favorites.</h3>
      <p>Take a look on the list below</p>
      <ul>
        {defaultCities.map((city, index) => {
          const saved = cities.some(
            (c) => c.city === city.city && c.country === city.country
          );
          return (
            <li key={index}>
              <strong>{city.city}, {city.country}</strong><p>{localTime(city.timezone)}</p>
              <button onClick={() => AddCity(city)} disabled={saved}>
                +
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
