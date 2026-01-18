import { api } from "./axios.js"

export const getCurrentWeather = (city) => {
    return api.get("/data/2.5/weather", {
        params: {
            q: city
        }
    })
}