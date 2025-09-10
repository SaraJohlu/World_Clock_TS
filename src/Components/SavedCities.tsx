 import type { City } from "./CityData"

interface SavedCitiesProps {
  cities: City[]; // Add from App.tsx
}
  export const SavedCities: React.FC<SavedCitiesProps> = ({ cities }) => {
    const localTime = (timezone: string) => {
    return new Intl.DateTimeFormat("sv-SE", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());
  };

  return (<main>
  <h2>Dina favoriter</h2>
  <p>Här sparas dina tillagda städer samt markerade favoriter</p>
   {cities.length > 0 && (
        <ul>
          {cities.map((city, index) => (
            <li key={index}>
              {city.city}, {city.country} - {localTime(city.timezone)}
            </li>
          ))}
        </ul> 
    )}
  </main> 
  );
};
  

  
  