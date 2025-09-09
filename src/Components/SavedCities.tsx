  import { useState } from "react"
  import { storageKey } from "./Localstorage"

  interface City {
    city: string,
    country: string,
    timezone: string
  }

  export const SavedCities: React.FC = () => {
    const [savedCities, setSavedCities] = useState<City[]>([]);
    
      const localTime = (timezone: string) => {
    return new Intl.DateTimeFormat("sv-SE", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());
  };

    const showSavedCities = () => {
    const savedCities = localStorage.getItem(storageKey);
    if (savedCities) {
      setSavedCities(JSON.parse(savedCities));
    } else {
      setSavedCities([]);
    }
  };

  return (<main>
  <button onClick={showSavedCities}>Sparade städer</button>
   {savedCities.length > 0 && (
        <ul>
          {savedCities.map((city, index) => (
            <li key={index}>
              {city.city}, {city.country} - {localTime(city.timezone)}
            </li>
          ))}
        </ul> 
    )}
  </main> 
  );
};
  

  
  