import { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import Weather from './components/Weather'
function App() {
  const [cityName, setCityName] = useState<string | null>("")
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'100vw', backgroundColor:'black'}}>
      <div style={{display:'flex', flexDirection:'column', width:'25vw'}}>
        <SearchInput setCityName={setCityName} />
        { cityName && (
          <Weather cityName={cityName}/>
          )
        }
      </div>
    </div>
  );
}

export default App;
