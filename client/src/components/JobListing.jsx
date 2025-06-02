import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { assets, JobCategories, JobLocations } from '../assets/assets';
import JobCard from './JobCard';

const JobListing = () => {
    const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
    const [showFilter, setShowFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState(jobs);

    const handleCategoryChange = (category) => {
        setSelectedCategories(
            prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        )
    }

    const handleLocationChange = (location) => {
        setSelectedLocations(
            prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev, location]
        )
    }

    useEffect(() => {
        const matchesCategory = job => selectedCategories.length === 0 || selectedCategories.includes(job.category)
        const matchesLocation = job => selectedLocations.length === 0 || selectedLocations.includes(job.location)
        const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase())
        const matchesSearchLocation = job => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase())
        const newFilteredJobs = jobs.slice().reverse().filter(
            job => matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)
        )
        setFilteredJobs(newFilteredJobs);
        setCurrentPage(1);
    }, [jobs, selectedCategories, selectedLocations, searchFilter]);

    return (
        <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8 px-4'>
            {/* Sidebar - Filter Panel */}
            <div className='w-full lg:w-1/4 bg-blue-300/50 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl'>
                {/* Search Filter from Hero Component */}
                {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                    <div className='mb-6 animate-fade-in'>
                        <h3 className='font-semibold text-lg mb-4 text-gray-800'>Current Search</h3>
                        <div className='flex flex-wrap gap-2'>
                            {searchFilter.title && (
                                <span className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 px-4 py-2 rounded-full text-blue-700 shadow-sm transition-all hover:scale-105'>
                                    {searchFilter.title}
                                    <img
                                        onClick={e => setSearchFilter(prev => ({ ...prev, title: "" }))}
                                        className='cursor-pointer w-4 h-4 opacity-70 hover:opacity-100 transition-opacity'
                                        src={assets.cross_icon}
                                        alt="Clear"
                                    />
                                </span>
                            )}
                            {searchFilter.location && (
                                <span className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-cyan-100 border border-cyan-200 px-4 py-2 rounded-full text-cyan-700 shadow-sm transition-all hover:scale-105'>
                                    {searchFilter.location}
                                    <img
                                        onClick={e => setSearchFilter(prev => ({ ...prev, location: "" }))}
                                        className='cursor-pointer w-4 h-4 opacity-70 hover:opacity-100 transition-opacity'
                                        src={assets.cross_icon}
                                        alt="Clear"
                                    />
                                </span>
                            )}
                        </div>
                    </div>
                )}

                <button
                    onClick={e => setShowFilter(prev => !prev)}
                    className='w-full lg:hidden px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium mb-6 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95'
                >
                    {showFilter ? "▲ Hide Filters" : "▼ Show Filters"}
                </button>

                {/* Category Filter */}
                <div className={`${showFilter ? "block" : "max-lg:hidden"} transition-all duration-300`}>
                    <h4 className='font-semibold text-xl py-4 text-gray-800 border-b border-gray-100 flex items-center'>
                        <span className='mr-2'>🔍</span> Job Categories
                    </h4>
                    <ul className='space-y-3 mt-4'>
                        {JobCategories.map((category, index) => (
                            <li
                                key={index}
                                className={`flex items-center p-3 rounded-lg transition-all ${selectedCategories.includes(category) ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`}
                            >
                                <label className='flex items-center cursor-pointer w-full'>
                                    <input
                                        type='checkbox'
                                        className='form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 transition'
                                        onChange={() => handleCategoryChange(category)}
                                        checked={selectedCategories.includes(category)}
                                    />
                                    <span className='ml-3 text-gray-700'>{category}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Location Filter */}
                <div className={`${showFilter ? "block" : "max-lg:hidden"} mt-8 transition-all duration-300`}>
                    <h4 className='font-semibold text-xl py-4 text-gray-800 border-b border-gray-100 flex items-center'>
                        <span className='mr-2'>📍</span> Job Locations
                    </h4>
                    <ul className='space-y-3 mt-4'>
                        {JobLocations.map((location, index) => (
                            <li
                                key={index}
                                className={`flex items-center p-3 rounded-lg transition-all ${selectedLocations.includes(location) ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`}
                            >
                                <label className='flex items-center cursor-pointer w-full'>
                                    <input
                                        type='checkbox'
                                        className='form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 transition'
                                        onChange={() => handleLocationChange(location)}
                                        checked={selectedLocations.includes(location)}
                                    />
                                    <span className='ml-3 text-gray-700'>{location}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Job Listings */}
            <section className='w-full lg:w-3/4 lg:pl-8'>
                <div className='mb-8'>
                    <h3 className='font-bold text-3xl md:text-2xl bg-gradient-to-r from-blue-800 to-cyan-500 bg-clip-text text-transparent py-2 animate-fade-in'>
                        Latest Job Opportunities
                    </h3>
                    <p className='text-lg text-gray-600 mb-6'>Discover your dream job at top-tier companies</p>
                </div>

                {filteredJobs.length > 0 ? (
                    <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                            {filteredJobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, index) => (
                                <JobCard key={index} job={job} className='transition-all hover:scale-[1.02]' />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className='flex items-center justify-center space-x-2 mt-12 animate-fade-in'>
                            <a href="#job-list" className='focus:outline-none'>
                                <button
                                    onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                                    className='w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all shadow-sm hover:shadow-md'
                                >
                                    <img src={assets.left_arrow_icon} alt="Previous" className='w-5 h-5 opacity-70 hover:opacity-100 transition-opacity' />
                                </button>
                            </a>

                            {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map((_, index) => (
                                <a href='#job-list' key={index} className='focus:outline-none'>
                                    <button
                                        onClick={() => setCurrentPage(index + 1)}
                                        className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all ${currentPage === index + 1 ? 'bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 shadow-sm hover:shadow-md'}`}
                                    >
                                        {index + 1}
                                    </button>
                                </a>
                            ))}

                            <a href="#job-list" className='focus:outline-none'>
                                <button
                                    onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6)))}
                                    className='w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all shadow-sm hover:shadow-md'
                                >
                                    <img src={assets.right_arrow_icon} alt="Next" className='w-5 h-5 opacity-70 hover:opacity-100 transition-opacity' />
                                </button>
                            </a>
                        </div>
                    </>
                ) : (
                    <div className='bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 text-center animate-fade-in'>
                        <img src={assets.empty_icon} alt="No jobs found" className='w-24 h-24 mx-auto mb-6 opacity-80' />
                        <h4 className='text-2xl font-semibold text-gray-700 mb-2'>No Jobs Found</h4>
                        <p className='text-gray-500'>Try adjusting your filters or search criteria</p>
                        <button
                            onClick={() => {
                                setSearchFilter({ title: "", location: "" });
                                setSelectedCategories([]);
                                setSelectedLocations([]);
                            }}
                            className='mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105'
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}
            </section>
        </div>
    )
}

export default JobListing