// Handels the localstorage function and provides a special key for it.
type City = {
  city: string;
  country: string;
  timezone: string;
};

export const storageKey = "citiesKey";

export const LocalStorage = (): City[] => {
    const savedCity = localStorage.getItem(storageKey);
    if(savedCity) {
        return JSON.parse(savedCity);
    }
    return[]
};

export const AddToLocalStorage = (city: City[]) => {
    localStorage.setItem(storageKey, JSON.stringify(city))
};

export const RemoveFromLocalStorage = (removeCity: City) => {
    const saved = LocalStorage();

    const updatedList = saved.filter((c) =>
         !(c.city.toLowerCase() === removeCity.city.toLowerCase() &&
           c.country.toLowerCase() === removeCity.country.toLowerCase()
        )
    );
    
    localStorage.setItem(storageKey, JSON.stringify(updatedList));
    return updatedList;
}