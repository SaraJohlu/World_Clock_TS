import { HomeCities } from "./Components/HomeCities.tsx";
import { SavedCities } from "./Components/SavedCities.tsx";
import { AddNewCity } from "./Components/AddNewCity.tsx";
import { useState } from "react";
import { storageKey } from "./Components/Localstorage.tsx";
import { useEffect } from "react";
import cityData from "./defaultCities.json";
import type { City } from "./Components/CityData.tsx";
import { Route, Routes, Link } from "react-router-dom";
import { HeaderImgShuffle } from "./Components/ImgShuffle.tsx";

import "./Styles/App.css";

export default function App() {
  const [cities, setCities] = useState<City[]>(() => {
    const savedCities = localStorage.getItem(storageKey);
    if (savedCities) return JSON.parse(savedCities);
    return cityData;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(cities));
  }, [cities]);

  return (
    <main>
      <HeaderImgShuffle />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/saved">Saved Cities</Link>
        <Link to="/add">Add city</Link>
      </nav>
      

      <Routes>
        <Route
          path="/"
          element={<HomeCities cities={cities} setCities={setCities} />}
        />
        <Route path="/saved" element={<SavedCities cities={cities} setCities={setCities} />} />
        <Route
          path="/add"
          element={<AddNewCity newCity={cities} setNewCity={setCities} />}
        />
      </Routes>

      <footer><p>© Sara Johnson Lundén: a Johlu creation</p></footer>
    </main>
  );
}
