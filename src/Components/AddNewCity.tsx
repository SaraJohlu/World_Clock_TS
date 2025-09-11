import { useState } from "react";
import type { City } from "./CityData"; // Imports City interface from CityData.tsx file.
import worldsTimezones from "../worldsTimezones.json";
import { storageKey } from "./Localstorage";
import "../Styles/AddCityStyle.css"

//Using props to use from parent component which is Cities.tsx
interface propsCity {
  newCity: City[]; //declare that newCity is out interface in Cities.tsx
  setNewCity: React.Dispatch<React.SetStateAction<City[]>>; // Updates the City[] with new value.
}

export const AddNewCity: React.FC<propsCity> = ({ newCity, setNewCity }) => {
  const [addCity, setAddCity] = useState({
    city: "",
    country: "",
    timezone: "",
  });
  const [searchTz, setSearchTz] = useState("");
  const [okMessage, setOkMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuggest, setShowSuggets] = useState(false)

  //An array that's going to have two properties all the time.
  //This is an empty array
  const TzOptions: { timezone: string; offset: string }[] = [];

  // Getting the main key in JSON file, like "Europe", "America"..
  // Going through every array to get timezones.
  Object.keys(worldsTimezones).forEach((continent) => {
    const tzList = worldsTimezones[continent as keyof typeof worldsTimezones];
    tzList.forEach((tz) => {
      if (tz.timezone)
        TzOptions.push({ timezone: tz.timezone, offset: tz.offset });
    });
  });

  //Declare FilterTzObject as a array method that filters its way through the array and see if the values match functions properties.
  //toLowerCase returns array in small letters for better using for user.
  const FilterTzObjects = TzOptions.filter((tz) =>
    tz.timezone.toLowerCase().includes(searchTz.toLowerCase())
  );

  //Function for the what is going to be the inputs to add a new city.
  const handleAddCity = () => {
    setErrorMessage("");
    setOkMessage("");

    // Error messages will be returned if user hasn't filled in every input field.
    if (!addCity.city || !addCity.country || !addCity.timezone) {
      setErrorMessage("Please enter all fields");
      return;
    }
    if (
      newCity.some(
        (
          c // Prevents user to save doublets
        ) =>
          c.city.toLowerCase() === addCity.city.toLowerCase() &&
          c.country.toLowerCase() === addCity.country.toLowerCase()
      )
    ) {
      setErrorMessage("City already existing in your saved list");
      return;
    }

    //When successfully adding the city and timezone it will be saved in localstorage.
    const newUpdatedCities = [...newCity, addCity];
    setNewCity(newUpdatedCities);
    localStorage.setItem(storageKey, JSON.stringify(newUpdatedCities));
    setOkMessage("City was added successfully");
    setAddCity({ city: "", country: "", timezone: "" });
    setSearchTz("");
  };

  return (
    <main className="addCityContainer">
      <h1>Add a new city to your list</h1>

      {errorMessage && <p>{errorMessage}</p>}
      {okMessage && <p>{okMessage}</p>}

      <span>
        <input
          type="text"
          placeholder="Search timezone"
          value={searchTz}
          onFocus={() => setShowSuggets(true)}
          onBlur={() => setTimeout(() => setShowSuggets(false), 150)}
          onChange={(e) => {
            setSearchTz(e.target.value);
            setShowSuggets(true);
           }}

           />
        
        {showSuggest && searchTz && FilterTzObjects.length > 0 && (
          <ul>
            {FilterTzObjects.map((tz) => (
              <li
                key={tz.timezone}
                onClick={() => {
                  setAddCity((prev) => ({ ...prev, timezone: tz.timezone }));
                  setSearchTz(tz.timezone); // going to fill in the input field automatically
                  setShowSuggets(false)
                }}
               
              >
                {tz.timezone} (UTC{tz.offset})
              </li>
            ))}
          </ul>
        )}

        <input
          type="text"
          placeholder="Enter country name"
          value={addCity.country}
          onChange={(e) =>
            setAddCity((prev) => ({ ...prev, country: e.target.value }))
          }
        />

        <input
          type="text"
          placeholder="Enter city name"
          value={addCity.city}
          onChange={(e) =>
            setAddCity((prev) => ({ ...prev, city: e.target.value }))
          }
        />

        <button onClick={handleAddCity}>Add City</button>
      </span>
    </main>
  );
};
