import React, { useContext } from 'react'
import assets from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { Hand } from 'lucide-react'

const Header = () => {

    const { userData } = useContext(AppContext)

    return (
        <div className='w-full min-h-screen flex items-center justify-center px-6 text-center text-gray-800 
        bg-linear-to-br from-blue-50 via-white to-purple-50'>

            {/* Center Content */}
            <div className='bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl rounded-3xl p-8 sm:p-12 max-w-xl w-full flex flex-col items-center'>

                {/* Avatar */}
                <div className='relative mb-6'>
                    <img
                        src={assets.header_img}
                        alt=""
                        className='w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-lg'
                    />
                    <div className='absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white'></div>
                </div>

                {/* Greeting */}
                <h1 className='flex items-center justify-center gap-2 text-xl sm:text-3xl font-semibold mb-2'>
                    Hey {userData ? userData.name : "Developer"}
                    <Hand className='w-7 h-7 text-yellow-500 animate-bounce' />
                </h1>

                {/* Title */}
                <h2 className='text-2xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent'>
                    Welcome to our app
                </h2>

                {/* Description */}
                <p className='max-w-md text-sm sm:text-base text-gray-600 leading-relaxed mb-6'>
                    Let's start with a quick product tour and we will have you up and running in no time!
                </p>

                {/* Button */}
                <button className='px-8 py-3 bg-linear-to-r from-gray-800 to-gray-700 text-white rounded-full 
                hover:scale-105 hover:shadow-lg transition-all duration-200 font-medium cursor-pointer'>
                    Get Started
                </button>

            </div>
        </div>
    )
}

export default Header