import { Cities } from './Components/Cities.tsx';
import { SavedCities } from './Components/SavedCities.tsx';
import { AddNewCity }  from './Components/AddNewCity.tsx';
import { useState } from 'react';
import { storageKey } from './Components/Localstorage.tsx';
import { useEffect } from 'react';
import cityData from "./defaultCities.json"
import type { City } from './Components/CityData.tsx';

export default function App() {
 const [cities, setCities] = useState<City[]>(() => {
const savedCities = localStorage.getItem(storageKey);
 if(savedCities) return JSON.parse(savedCities)
  return cityData;
 });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(cities));
  }, [cities]);

  return (
    <>
    <h1>World Clock</h1>
    <p>"Everyone Has Their Own Timezone</p>
    
      <Cities cities={cities} setCities={setCities}/> {/*Cities component imported*/}
      <SavedCities cities={cities} />
      <AddNewCity newCity={cities} setNewCity={setCities} />
      
    </>
  )
}

