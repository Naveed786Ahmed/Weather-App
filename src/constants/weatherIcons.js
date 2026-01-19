import clear from "../assets/weather/clear.png"
import cloud from "../assets/weather/cloud.png"
import rain from "../assets/weather/rain.png"
import smoke from "../assets/weather/smoke.png"
import sunny from "../assets/weather/sunny.png"
import defaultIcon from "../assets/weather/defaultWeather.png"

export const WEATHER_ICON = {
    Clear: sunny,
    Clouds: clear,
    Rain: rain,
    Smoke: smoke,
    Sunny: sunny,
    Haze: smoke,
    Mist: smoke
}

export const getWeatherIcon = (condition) => {
    return WEATHER_ICON[condition] || defaultIcon;
}

