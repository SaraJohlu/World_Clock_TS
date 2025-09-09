import { Cities } from './Components/Cities.tsx';
import { SavedCities } from './Components/SavedCities.tsx';



export default function App() {
console.log(Cities)


  return (
    <>
    <h1>World Clock</h1>
    
      <Cities /> {/*Cities component imported*/}
      <SavedCities />
      


    </>
  )
}

