import { getForecast } from "../api/forecast.api.js";
import { getCurrentWeather } from "../api/weather.api.js"

const getDailyForecast = (list) => {
    const dailyData = {};

    list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];

        if (!dailyData[date]) {
            dailyData[date] = {
                minTemp: item.main.temp_min,
                maxTemp: item.main.temp_max,
                condition: item.weather[0].main,
                day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })
            }
        } else {
            if (item.main.temp_min < dailyData[date].minTemp) {
                dailyData[date].minTemp = item.main.temp_min;
            }

            if (item.main.temp_max > dailyData[date].maxTemp) {
                dailyData[date].maxTemp = item.main.temp_max
            }
        }
    });

    return Object.values(dailyData).slice(0, 5);
}

export const fetchWeatherData = async (city) => {

    const { data: current } = await getCurrentWeather(city);
    
    const { lat, lon } = current.coord;
    const { data: forecast } = await getForecast(lat, lon);
    
    
    return {
        city: current.name,
        temp: Math.round(current.main.temp),
        condition: current.weather[0].main,
        feel: Math.round(current.main.feels_like), 
        humidity: current.main.humidity, // %
        windSpeed: Math.round(current.wind.speed * 3.6), // km/h
        visibility: (current.visibility / 1000), // km
        dailyForecast: forecast?.list ? getDailyForecast(forecast.list) : []
    }
}

