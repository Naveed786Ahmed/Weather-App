import { useState } from "react";
import { validator } from "../utils/validator.js";
import { fetchWeatherData } from "../services/weather.service.js";

export const useWeather = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState(null);

    const searchCity = async (city) => {
        const validationError = validator(city)

        if (validationError) {
            setError(validationError);
            return
        }

        try {
            setLoading(true);
            setError(null);

            const data = await fetchWeatherData(city);
            setWeather(data);

        } catch (error) {
            setError("City not found")

        } finally {
            setLoading(false);
        }
    }

    return {
        error, loading, searchCity, weather
    }
}