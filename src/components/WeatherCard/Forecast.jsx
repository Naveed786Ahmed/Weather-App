import React from 'react'
import sunny from "../../assets/weather/sunny.png"
import { getWeatherIcon } from '../../constants/weatherIcons';

const Forecast = ({ darkMode, weather }) => {
    return (
        <>
            <div className='w-full sm:grid sm:grid-cols-1 sm:gap-5 flex gap-4 overflow-x-auto py-4 scrollbar-hide'>
                {
                    weather?.dailyForecast.map((item, index) => {
                        
                        return (
                            <div key={index} className='w-20 sm:w-full sm:flex sm:items-center sm:justify-between sm:text-md text-sm shrink-0 bg-white/30 backdrop-blur-md border border-white/30 rounded-xl p-2'>

                                <p className={`${darkMode ? "text-white/70" : "text-black/70"} sm:w-1/5 text-center`}>{item.day}</p>

                                <div className='flex items-center justify-center flex-col sm:w-1/2 sm:flex-row'>
                                    <img src={getWeatherIcon(item?.condition)} alt="" className='sm:w-1/3 w-2/3 flex items-center justify-center' />
                                    <p className={`w-full sm:w-1/2 flex items-center justify-center ${darkMode ? "text-white/70" : "text-black/70"} font-medium`}>{item?.condition}</p>
                                </div>

                                <p className={`sm:w-1/4 flex items-center font-light justify-center ${darkMode ? "text-white/70" : "text-black/70"}`}><span className='font-medium text-xl sm:text-md'>{Math.round(item?.maxTemp)}&deg;</span>/{Math.round(item?.minTemp)}&deg;</p>
                            </div>
                        )

                    })
                }

            </div>
        </>
    )
}

export default Forecast