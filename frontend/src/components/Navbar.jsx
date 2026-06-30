import React, { useContext } from 'react'
import { User, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Navbar = () => {

  const navigate = useNavigate()
  const { userData, setUserData, setIsLoggedin, backendUrl } = useContext(AppContext)

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true

      const { data } = await axios.post('/api/auth/send-verify-otp')

      if (data.success) {
        navigate('/email-verify')
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`)

      if (data.success) {
        setIsLoggedin(false);
        setUserData(null);
        navigate('/');
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='w-full fixed top-0 left-0 z-50'>
      
      {/* Glass Navbar */}
      <div className='mx-auto max-w-7xl flex justify-between items-center px-6 sm:px-10 py-3 
        bg-white/70 backdrop-blur-xl shadow-sm border-b border-gray-200/50 rounded-b-2xl'>

        {/* Logo */}
        <div
          className='flex items-center gap-3 cursor-pointer group'
          onClick={() => navigate('/')}
        >
          <div className='w-10 h-10 flex items-center justify-center rounded-xl 
            bg-linear-to-br from-gray-800 to-gray-600 
            group-hover:scale-110 transition-transform duration-200 shadow-md'>
            <User className='w-5 h-5 text-white' />
          </div>

          <h2 className='font-bold text-gray-800 text-lg tracking-wide group-hover:tracking-wider transition-all'>
            auth
          </h2>
        </div>

        {/* Right Side */}
        {userData ? (
          <div className='relative group'>

            {/* Avatar */}
            <div className='w-11 h-11 flex justify-center items-center rounded-full 
              bg-linear-to-br from-indigo-500 to-purple-600 
              text-white font-semibold cursor-pointer shadow-md 
              hover:scale-105 transition-transform duration-200'>
              {userData.name[0].toUpperCase()}
            </div>

            {/* Dropdown */}
            <div className='absolute right-0 top-11 opacity-0 group-hover:opacity-100 
              pointer-events-none group-hover:pointer-events-auto 
              transition-all duration-200'>

              <ul className='bg-white/90 backdrop-blur-lg shadow-xl rounded-xl 
                text-sm overflow-hidden border border-gray-200 min-w-40'>

                {!userData.isAccountVerified && (
                  <li
                    className='px-4 py-3 hover:bg-gray-100 cursor-pointer transition'
                    onClick={sendVerificationOtp}
                  >
                    Verify Email
                  </li>
                )}

                <li
                  className='px-4 py-3 hover:bg-red-50 cursor-pointer text-red-500 transition'
                  onClick={logout}
                >
                  Logout
                </li>

              </ul>

            </div>

          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full 
            hover:bg-gray-800 hover:scale-105 transition-all shadow-md cursor-pointer'
          >
            <span className='text-sm font-medium'>Login</span>
            <ArrowRight className='w-4 h-4' />
          </button>
        )}

      </div>
    </div>
  )
}

export default Navbar