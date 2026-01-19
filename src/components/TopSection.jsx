import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { STRINGS } from '../constants'
import { GLASS_BOX } from '../constants/classes.js'

const TopSection = ({ darkMode, toggleTheme, loading, searchCity }) => {

    useEffect(() => {
        searchCity("murree");
    }, []);

    const [city, setCity] = useState("");

    return (
        <>
            <div className='flex flex-col gap-3 sm:flex-row sm:gap-3'>
                {/* Search Bar */}
                <div className='w-full sm:flex-1'>
                    <input
                        type="text"
                        placeholder={STRINGS.SEARCH_CITY_PLACEHOLDER}
                        className={`w-full text-sm sm:text-base ${GLASS_BOX} text-gray-900 outline-none placeholder:text-gray-600 focus:ring-2 focus:ring-blue-400/60 transition`}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                {/* Search Button & dark light mode */}
                <div className='w-full sm:w-auto flex items-center justify-center gap-2'>
                    <button
                        className={`px-4 py-2 rounded-xl shadow-lg text-white text-sm sm:text-base font-medium transition cursor-pointer active:scale-95 whitespace-nowrap ${darkMode ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-500 hover:bg-blue-400"}`}
                        onClick={() => searchCity(city)}
                    >
                        {loading ? "Loading..." : STRINGS.CHECK_WEATHER}
                    </button>
                    <button
                        onClick={() => toggleTheme()}
                        className={`${GLASS_BOX} flex items-center hover:bg-white/60 transition-all duration-300 cursor-pointer`}>
                        {
                            darkMode
                                ? <Sun size={18} className='text-white' />
                                : <Moon size={18} className="text-black-500" />
                        }
                    </button>
                </div>
            </div>
        </>
    )
}

export default TopSection