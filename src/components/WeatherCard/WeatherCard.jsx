import React from 'react'
import CurrentImpInfo from './CurrentImpInfo.jsx'
import CurrentWeatherExtraInfo from './CurrentWeatherExtraInfo.jsx'
import Forecast from './forecast.jsx'
import { STRINGS } from '../../constants/strings.js'
import { useTheme } from '../../hooks/UseTheme.js'

const WeatherCard = ({ weather }) => {

    const { darkMode } = useTheme();

    return (
        <>
            <div className='w-full flex flex-col gap-3 sm:flex-row sm:gap-4'>

                {/* Current Forecast */}
                <div className='w-full sm:flex-1 sm:p-2 flex flex-col gap-3'>
                    {/* Important Info */}
                    <CurrentImpInfo weather={weather} />
                    {/* Extra Info */}
                    <CurrentWeatherExtraInfo weather={weather} />
                </div>

                {/* days Forecast */}
                <div className='w-full sm:w-1/3 p-2 flex flex-col gap-1 rounded-xl sm:bg-white/20 sm:border sm:border-white/30'>
                    <p className={`text-sm sm:text-md text-start font-medium ${darkMode ? "text-white/70" : "text-black/70"}`}>{STRINGS.DAYS_FORECAST}</p>
                    <Forecast weather={weather} />
                </div>
            </div>
        </>
    )
}

export default WeatherCard