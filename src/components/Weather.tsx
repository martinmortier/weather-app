type WeatherProps = {
    cityName: string
}
const Weather = ({cityName} : WeatherProps) => {
    return (
        <div>
            {cityName}
        </div>
    )
}

export default Weather
