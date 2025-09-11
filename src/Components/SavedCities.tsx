import type { City } from "./CityData";
import { RemoveFromLocalStorage } from "./Localstorage";
import "../Styles/SavedCititesStyle.css"
import { useState, useEffect } from "react";
import Clock from "react-clock"; // 
import "react-clock/dist/Clock.css"; // 

interface SavedCitiesProps {
  cities: City[]; // Add from App.tsx
  setCities: React.Dispatch<React.SetStateAction<City[]>>;
}
export const SavedCities: React.FC<SavedCitiesProps> = ({ cities, setCities }) => {
  const [clockNow, setClockNow] = useState(new Date());

  useEffect(() => {
    const clockTimer = setInterval(() =>setClockNow(new Date()),1000);
    return () => clearInterval(clockTimer);
  }, []);

 //The digital clock
  const localTimeAsString = (timezone: string) => 
     new Intl.DateTimeFormat("sv-SE", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(clockNow);

    const localTimeDate = (timezone: string) => 
      new Date(new Date(clockNow).toLocaleString("sv-SE", {timeZone: timezone})
    );
  

  const handleRemove = (city: City) => {
    const update = RemoveFromLocalStorage(city);
    setCities(update);
  };

  return (
    <main className="SavedCityContainer">
      <section className="SavedCityText">
        <h2>Home is where your favorites are!</h2>
        <p>This is your main page for your saved cities.</p>
      </section>

      {cities.length === 0 && (<p className="NoSavedCities">Oh no, you have no saved cities yet!</p>)}

      {cities.length > 0 && (
        <ul>
          {cities.map((city, index) => {
            const timeString = localTimeAsString(city.timezone);
            const timeDate = localTimeDate(city.timezone);
              return (
              <li key={index}>
                <section className="timeZoneRow">
                    <strong className="cityLabel">{city.city}, {city.country}</strong> 
                    <p className="digitalClock">{timeString}</p>
                    <Clock value ={timeDate} size={100} renderNumbers={true} className="analogClock" />
                    <button onClick={() => handleRemove(city)}>X</button>
                </section>
                
            </li>
              );
          })}
        </ul>
      )}
    </main>
  );
};
