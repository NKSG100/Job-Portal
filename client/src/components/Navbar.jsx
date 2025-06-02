import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(AppContext);

  return (
    <div className='sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-gray-900 border-b shadow-sm'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center py-4'>
        {/* Logo with animation */}
        <img
          onClick={() => navigate('/')}
          className='cursor-pointer h-10 transition-all duration-500 hover:scale-110'
          src={assets.logo}
          alt="logo"
        />

        {user ? (
          <div className='flex items-center gap-6 animate-fade-in'>
            <Link
              to={'/applications'}
              className='relative text-white hover:text-blue-600 transition-all duration-300 group font-medium'
            >
              Applied Jobs
              <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
            </Link>

            <div className='w-px h-6 bg-gray-200'></div>

            <div className='flex items-center gap-3'>
              <p className='max-sm:hidden text-white'>
                Welcome
                <span className='ml-1.5 font-bold text-blue-500'>
                  {user.firstName}
                </span>
              </p>
              <UserButton user={user} />
            </div>
          </div>
        ) : (
          <div className='flex gap-4 max-sm:text-xs animate-fade-in'>
            <button
              onClick={(e) => setShowRecruiterLogin(true)}
              className='relative px-5 py-2 rounded-lg font-medium border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-300 group'
            >
              <span className='relative z-10 flex items-center gap-1'>
                <span className='text-blue-500'>🔒</span>
                Recruiter Login
              </span>
              <span className='absolute inset-0 rounded-md bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300'></span>
            </button>

            <button
              onClick={(e) => openSignIn()}
              className='relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 sm:px-9 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.03] font-medium'
            >
              <span className='relative z-10'>Candidate Login</span>
              <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300'></span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar