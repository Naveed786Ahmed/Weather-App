import React from 'react'
import Spinner from "../assets/Spinner.svg"
import SpinnerLight from "../assets/SpinnerLight.svg"
import { useTheme } from '../hooks/UseTheme.js';

const Loading = () => {
    
    const { darkMode } = useTheme();

    return (
        <>
            <div className='w-full h-30 sm:h-35 rounded-xl flex items-center justify-center'>
                <img src={darkMode ? Spinner : SpinnerLight} alt="Loading" className='w-1/2 sm:w-1/6' />
            </div>
        </>
    )
}

export default Loading