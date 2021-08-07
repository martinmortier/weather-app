import { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import Weather from './components/Weather'
import City from './interfaces/City'
function App() {
  const [city, setCity] = useState<string | null>("")
  return (
    <>
      <SearchInput setCity={setCity} />
      { city && (
        <Weather city={city}/>
        )
      }
    </>
  );
}

export default App;
