import React from 'react'
import light from "../assets/light.jpg"
import dark from "../assets/dark1.jpg"
import { useTheme } from '../hooks/UseTheme.js'
import TopSection from '../components/TopSection.jsx'
import WeatherCard from '../components/WeatherCard/WeatherCard.jsx'
import { useWeather } from '../hooks/useWeather.js'
import Loading from '../components/Loading.jsx'
import { toast, ToastContainer } from 'react-toastify'


const WeatherPage = () => {
    const { darkMode } = useTheme();
    const { error, weather, loading, searchCity } = useWeather();
    if (error) {
        toast(error)
    }

    return (
        <>
            <div className='min-h-screen flex items-center justify-center p-4 sm:p-10 transition ' style={{ backgroundImage: `url(${darkMode ? dark : light})`, backgroundSize: "cover" }}>
                <ToastContainer position="top-center" autoClose={3000} />

                {/* Main Container */}
                <div className='w-full bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl max-w-3xl p-4 sm:p-6 space-y-4'>
                    {/* Top Section */}
                    <TopSection loading={loading} searchCity={searchCity} />

                    {
                        (loading || error)
                            ? <Loading />
                            : <WeatherCard weather={weather} />
                    }
                </div>
            </div>
        </>
    )
}

export default WeatherPage