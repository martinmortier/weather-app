import axios from "axios"
import { useEffect, useState } from "react"
import City from "../interfaces/City"
type WeatherProps = {
    cityName: string
}
const Weather = ({cityName} : WeatherProps) => {
    const [cityWeather, setCityWeather] = useState<null | City>(null)
    const fetchData = async () => {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
        console.log(response.data)
        setCityWeather({
            name: response.data.name,
            weather: {
                description: response.data.weather[0].description
            }
        })
    }
    useEffect(() => {
        fetchData()
    }, [cityName])

    return (
        <div>
            {cityWeather && cityWeather.name}
        </div>
    )
}

export default Weather
