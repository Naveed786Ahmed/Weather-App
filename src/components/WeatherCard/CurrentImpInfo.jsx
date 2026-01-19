import React from 'react'
import sunny from "../../assets/weather/sunny.png"
import { getWeatherIcon } from '../../constants/weatherIcons'

const CurrentImpInfo = ({darkMode, weather}) => {
    
    const icon = getWeatherIcon(weather?.condition)
    
    return (
        <>
            <div className='w-full p-2 sm:p-4 flex flex-col bg-white/20 backdrop-blur-md rounded-xl border border-white/30'>
                {/* City Name Container */}
                <div className='w-full flex items-center justify-center sm:justify-start sm:pl-2'>
                    <p className={`text-lg sm:text-2xl font-semibold ${darkMode ? "text-white" : "text-black"}`}>{weather?.city}</p>
                </div>

                {/* City Temperature */}
                <div className='w-full p-2 flex flex-col sm:flex-row items-center justify-center'>
                    
                    {/* image container */}
                    <div className='w-full sm:w-1/4 flex items-center justify-center sm:justify-end'>
                        <img src={icon} alt="" className='w-1/2 sm:w-full'/>
                    </div>
                    
                    {/* condition & temperature */}
                    <div className='w-full sm:w-1/2 flex flex-col items-center justify-center'>
                        <p className={`${darkMode ? "text-white/80" : "text-black/80"} w-full text-3xl sm:text-5xl font-medium flex items-center justify-center sm:justify-start`}><span className='text-5xl sm:text-7xl'>{weather?.temp}°</span>C</p>
                        <p className={`${darkMode ? "text-white/70" : "text-black/70"} w-full text-xl sm:text-2xl font-medium flex items-center justify-center sm:justify-start`}>{weather?.condition}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CurrentImpInfo