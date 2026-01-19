import { Droplets, Eye, Thermometer, Wind } from 'lucide-react'
import React from 'react'
import { STRINGS } from '../../constants/strings'

const CurrentWeatherExtraInfo = ({ darkMode, weather }) => {
    return (
        <>
            <div className='w-full p-2 sm:p-4 grid grid-cols-2 gap-4 rounded-xl'>
                <div className={`${darkMode ? "text-white/80" : "text-black/80"} bg-white/20 backdrop-blur-md border border-white/30 p-2 sm:p-4 rounded-xl`}>
                    <p className='text-sm sm:text-md opacity-80 w-full flex items-center'><span><Thermometer size={18}/></span>{STRINGS.FEEL_LIKE}</p>
                    <p className='text-lg sm:text-3xl font-medium'>{weather?.feel}°C</p>
                </div>

                <div className={`${darkMode ? "text-white/80" : "text-black/80"} bg-white/20 backdrop-blur-md p-2 border border-white/30 sm:p-4 rounded-xl`}>
                    <p className='text-sm sm:text-md opacity-80 w-full flex items-center gap-1'><span><Droplets size={18}/></span>{STRINGS.HUMIDITY}</p>
                    <p className='text-lg sm:text-3xl font-medium'>{weather?.humidity}%</p>
                </div>

                <div className={`${darkMode ? "text-white/80" : "text-black/80"} bg-white/20 backdrop-blur-md border border-white/30 p-2 sm:p-4 rounded-xl`}>
                    <p className='text-sm sm:text-md opacity-80 w-full flex items-center gap-1'><span><Wind size={18}/></span>{STRINGS.WIND}</p>
                    <p className='text-lg sm:text-3xl font-medium'>{weather?.windSpeed} km/h</p>
                </div>

                <div className={`${darkMode ? "text-white/80" : "text-black/80"} bg-white/20 backdrop-blur-md border border-white/30 p-2 sm:p-4 rounded-xl`}>
                    <p className='text-sm sm:text-md opacity-80 w-full flex items-center gap-1'><span><Eye size={18}/></span>{STRINGS.VISIBILITY}</p>
                    <p className='text-lg sm:text-3xl font-medium'>{weather?.visibility} km</p>
                </div>
            </div>
        </>
    )
}

export default CurrentWeatherExtraInfo