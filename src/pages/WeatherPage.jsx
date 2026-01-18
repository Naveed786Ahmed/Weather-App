import React from 'react'
import light from "../assets/light.jpg"
import dark from "../assets/dark.jpg"
import { useTheme } from '../hooks/UseTheme.js'
import TopSection from '../components/TopSection.jsx'
import WeatherCard from '../components/WeatherCard/WeatherCard.jsx'

const WeatherPage = () => {
    const {darkMode, toggleTheme} = useTheme();

    return (
        <>
            <div className='min-h-screen flex items-center justify-center p-4 transition' style={{ backgroundImage: `url(${darkMode ? dark : light})`, backgroundSize: "cover" }}>
                {/* Main Container */}
                <div className='w-full bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl max-w-2xl p-4 sm:p-6 space-y-4'>
                    {/* Top Section */}
                    <TopSection darkMode={darkMode} toggleTheme={toggleTheme}/>
                    <WeatherCard />
                </div>
            </div>
        </>
    )
}

export default WeatherPage