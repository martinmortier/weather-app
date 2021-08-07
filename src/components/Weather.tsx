import axios from "axios"
import { useEffect, useState } from "react"
import City from "../interfaces/City"
type WeatherProps = {
    cityName: string
}
const Weather = ({cityName} : WeatherProps) => {
    const [cityWeather, setCityWeather] = useState<null | City>(null)
    const fetchData = async () => {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&?units=metric`)
        console.log(response.data)
        setCityWeather({
            name: response.data.name,
            main: {
                temp: response.data.main.temp,
                temp_max: response.data.main.temp_max,
                temp_min: response.data.main.temp_min,
            },
            weather: {
                description: response.data.weather[0].description,
                icon: response.data.weather[0].icon,
            }
        })
    }
    useEffect(() => {
        fetchData()
    }, [cityName])

    return (
        <div>
            {cityWeather &&
                <div style={{border:'1px solid black'}}>
                    {cityWeather.name}
                    <img src={`http://openweathermap.org/img/wn/${cityWeather.weather.icon}@2x.png`} alt="icon"/>
                    <div style={{display:'flex', border:'1px solid black'}}>
                        {cityWeather.main.temp}°C
                        {cityWeather.main.temp_max}°C
                        {cityWeather.main.temp_min}°C
                    </div>
                </div>
            }
        </div>
    )
}

export default Weather
