type WeatherProps = {
    city: string
}
const Weather = ({city} : WeatherProps) => {
    return (
        <div>
            {city}
        </div>
    )
}

export default Weather
