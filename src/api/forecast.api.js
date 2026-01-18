import { api } from "./axios.js"

export const getForecast = (lat, lon) => {
    return api.get("/data/2.5/forecast", {
        params: {
            lat,
            lon,
            exclude: "minutely,alerts"
        }
    })
}
