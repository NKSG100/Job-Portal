import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className='relative group overflow-hidden border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white'>
      {/* Glow effect on hover */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl'></div>

      {/* Company logo with animation */}
      <div className='flex justify-between items-center relative z-10'>
        <img
          className='h-10 transition-transform duration-300 group-hover:scale-110'
          src={job.companyId.image}
          alt={job.companyId.name}
        />
      </div>

      {/* Job title */}
      <h4 className='font-semibold text-xl mt-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 relative z-10'>
        {job.title}
      </h4>

      {/* Tags with animation */}
      <div className='flex items-center gap-3 mt-3 relative z-10'>
        <span className='bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-blue-600 text-xs font-medium transition-all duration-300 group-hover:bg-blue-100 group-hover:border-blue-200 group-hover:shadow-sm'>
          {job.location}
        </span>
        <span className='bg-red-50 border border-red-100 px-4 py-1.5 rounded-full text-red-600 text-xs font-medium transition-all duration-300 group-hover:bg-red-100 group-hover:border-red-200 group-hover:shadow-sm'>
          {job.level}
        </span>
      </div>

      {/* Description with fade effect */}
      <p
        className='text-gray-500 text-sm mt-4 relative z-10 transition-all duration-500 group-hover:text-gray-600'
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) + (job.description.length > 150 ? '...' : '') }}
      ></p>

      {/* Buttons with hover effects */}
      <div className='mt-6 flex gap-3 relative z-10'>
        <button
          onClick={() => { navigate(`/apply-job/${job._id}`); window.scrollTo(0, 0) }}
          className='relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium text-sm'
        >
          <span className='relative z-10 flex items-center gap-1'>
            ✨ Apply
          </span>
          <span className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300'></span>
        </button>

        <button
          onClick={() => { navigate(`/apply-job/${job._id}`); window.scrollTo(0, 0) }}
          className='relative overflow-hidden border border-gray-300 text-gray-600 px-5 py-2 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium text-sm'
        >
          <span className='relative z-10 flex items-center gap-1'>
            🔍 More
          </span>
        </button>
      </div>

      {/* Floating effect for the whole card */}
      <style jsx>{`
        .group:hover {
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </div>
  )
}

export default JobCard