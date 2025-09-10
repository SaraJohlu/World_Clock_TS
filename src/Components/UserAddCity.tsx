import { useState } from "react";
import worldsTimezones from "../worldsTimezones.json";
import type { City } from "./Cities";
import { storageKey } from "./Localstorage";


// Connecting this component with my Cities component. This function will help the user to add a new city into the app.
// Setting interface AddingCityProps to send it in to my functon. The interface make it easier for Ts to use it in our function.
interface AddingCityProps {
  selectCity: City[]; // The cities the user saves
  setSelectedCity: React.Dispatch<React.SetStateAction<City[]>>; // Using a build in function from React that updates the array
}

export const UserAddCity: React.FC<AddingCityProps> = ({
  selectCity,
  setSelectedCity,
}) => {
  const [addNewCity, setAddNewCity] = useState({
    city: "",
    country: "",
    timezone: "",
  });
  const [findTz, setFindTz] = useState(""); //useState for making it easier to find correct timezone
  const [error, setError] = useState(""); //useState for error messages for more user friendly experience.

  // Creating a drop down function where users can chose from continential timezone to make it easier.
  const OptionTz: { timezone: string; offset: string }[] = [];
  Object.keys(worldsTimezones).forEach((continent) => {
    const tzArray = worldsTimezones[continent as keyof typeof worldsTimezones];
    tzArray.forEach((tz) => {
      if (tz.timezone)
        OptionTz.push({ timezone: tz.timezone, offset: tz.offset });
    });
  });

  const FilterTzObjects = OptionTz.filter((tz) =>
    tz.timezone.toLowerCase().includes(findTz.toLowerCase())
  );

  const newCity = () => {
    if (!addNewCity.city || !addNewCity.country || !addNewCity.timezone) {
      setError("Please fill all fields.");
      return;
    }

    // Prevents the user to create doublets
    if (
      selectCity.some(
        (c) =>
          c.city === addNewCity.city &&
          c.country === addNewCity.country
      )
    ) {
      setError("City is already in your list.");
      return;
    }

    const updateCities = [...selectCity, addNewCity];
    setSelectedCity(updateCities);

    //Saving the new city/cities to localstorgare
    localStorage.setItem(storageKey, JSON.stringify(updateCities));

    // Restore the formula.
    setAddNewCity({ city: "", country: "", timezone: "" });
    setError("");
    setFindTz("");
  };

  return (
    <main className="UserAddCity-Container">
      <h1>Add new city to your list</h1>

      {error && <p>{error}</p>}

      <input
        type="text"
        placeholder="Country name"
        value={addNewCity.country}
        onChange={(e) =>
          setAddNewCity((prev) => ({ ...prev, country: e.target.value }))
        }
      />

      <input
        type="text"
        placeholder="City name"
        value={addNewCity.city}
        onChange={(e) =>
          setAddNewCity((prev) => ({ ...prev, city: e.target.value }))
        }
      />

      <input
        type="text"
        placeholder="Search for timezone.."
        value={findTz}
        onChange={(e) => setFindTz(e.target.value)}
      />

      <select
        size={10}
        value={addNewCity.timezone}
        onChange={(e) =>
          setAddNewCity((prev) => ({ ...prev, timezone: e.target.value }))
        }
      >
        <option value="">Chose timezone</option>
        {FilterTzObjects.map((tz, index) => (
          <option key={index} value={tz.timezone}>
            {tz.timezone} (UTC{tz.offset})
          </option>
        ))}
      </select>

      <button onClick={newCity}>Submit changes</button>
    </main>
  );
};
