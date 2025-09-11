import type { City } from "./CityData";
import { RemoveFromLocalStorage } from "./Localstorage";
import "../Styles/SavedCititesStyle.css"

interface SavedCitiesProps {
  cities: City[]; // Add from App.tsx
  setCities: React.Dispatch<React.SetStateAction<City[]>>;
}
export const SavedCities: React.FC<SavedCitiesProps> = ({
  cities,
  setCities,
}) => {
  const localTime = (timezone: string) => {
    return new Intl.DateTimeFormat("sv-SE", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());
  };

  const handleRemove = (city: City) => {
    const update = RemoveFromLocalStorage(city);
    setCities(update);
  };

  return (
    <main className="SavedCityContainer">
      <section className="SavedCityText">
        <h2>Save the favorites!</h2>
        <p>All the added and favorite cities are showing here.</p>
      </section>
      {cities.length === 0 && <p className="NoSavedCities">Oh no, you have no saved cities yet!</p>};
      {cities.length > 0 && (
        <ul>
          {cities.map((city, index) => (
            <li key={index}>
              {city.city}, {city.country} - {localTime(city.timezone)}
              <button onClick={() => handleRemove(city)}>X</button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
