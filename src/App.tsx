import { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import Weather from './components/Weather'
import City from './interfaces/City'
function App() {
  const [cityName, setCityName] = useState<string | null>("")
  return (
    <>
      <SearchInput setCityName={setCityName} />
      { cityName && (
        <Weather cityName={cityName}/>
        )
      }
    </>
  );
}

export default App;
