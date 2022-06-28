import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function MaineSearchPage() {
    const location = useLocation()
    let Comments = `/search/${location.search}&type=comment`
    
    return (

        <div className='bg-gray-300'>
            <div className='w-[800px] mx-auto'>
                <div className='buttons flex justify-start space-x-6 pt-10 '>
                    <button className='rounded-3xl w-16 py-[7px] bg-white font-semibold hover:bg-gray-100'>Posts</button>
                    <Link to={Comments}><button className='rounded-3xl w-24 py-[7px]  font-semibold hover:bg-gray-100 active:bg-white'>Comments</button></Link>
                    <button className='rounded-3xl w-28 py-[7px]  font-semibold hover:bg-gray-100 active:bg-white'>Communities</button>
                    <button className='rounded-3xl w-16 py-[7px]  font-semibold hover:bg-gray-100 active:bg-white'>People</button>
                </div>

            </div>
        </div>
    )
}
