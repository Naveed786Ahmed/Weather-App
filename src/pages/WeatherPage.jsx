import React, { useState } from 'react'
import light from "../assets/light.jpg"
import dark from "../assets/dark.jpg"
import { Moon, Sun } from 'lucide-react'

const WeatherPage = () => {
    const [darkMode, setDarkMode] = useState(false)
    console.log(darkMode);

    return (
        <>
            <div className='min-h-screen flex items-center justify-center p-4' style={{ backgroundImage: `url(${darkMode ? dark : light})`, backgroundSize: "cover" }}>
                {/* Main Container */}
                <div className='w-full bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl max-w-2xl p-4 sm:p-6 space-y-4'>
                    {/* Top Section */}
                    <div className='flex flex-col gap-3 sm:flex-row sm:gap-3'>
                        {/* Search Bar */}
                        <div className='w-full sm:flex-1'>
                            <input
                                type="text"
                                placeholder='Search City'
                                className='w-full text-sm sm:text-base py-2.5 px-4 bg-white/40 backdrop-blur-md rounded-xl text-gray-900 outline-none placeholder:text-gray-600 border border-white/30 transition focus:ring-2 focus:ring-blue-400/60'

                            />
                        </div>
                        {/* Search Button & dark light mode */}
                        <div className='w-full sm:w-auto flex items-center justify-center gap-2'>
                            <button
                                className='px-4 py-2 bg-blue-500 rounded-xl shadow-lg text-white text-sm sm:text-base font-medium transition duration-300 hover:bg-blue-400 cursor-pointer active:scale-95 whitespace-nowrap'
                                
                                >
                                Check Weather
                            </button>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className='px-4 py-2.5 flex items-center bg-white/40 backdrop-blur-md border border-white/30 rounded-xl hover:bg-white/60 transition-all duration-300 cursor-pointer'>
                                {
                                    darkMode
                                        ? <Sun size={18} className='text-yellow-400' />
                                        : <Moon size={18} className="text-black-500" />
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherPage