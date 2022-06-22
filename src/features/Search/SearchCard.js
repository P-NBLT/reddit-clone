import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function SearchCard(props) {
    const [open, setOpen] = useState(false)
    console.log(props.per)
    const permalink = props.per
    const handleClick = ()=>{
        setOpen(true)
    }
    

    return (
        <Link to={permalink} onClick={handleClick}>
        <div className='w-[800px] mx-auto'>
            <div className='flex flex-col border-[0.4px] border-gray-400 bg-white mx-2 my-1 rounded'>
                <div className='flex justify-between'>
                    <div className='top flex mx-2 flex-col py-1 w-3/4'>
                        {/* <p className='text-sm text-gray-700'>r/{props.subreddit}</p> */}
                        <p className='text-sm text-gray-700'>{props.subredditName}</p>
                        <p className='font-semibold pb-20 pt-2'>{props.title}</p>
                    </div>
                    <div className='mid  mx-2 mt-10'>
                        
                        <img src={props.thumbnail} className='rounded'/>
                    </div>
                </div>
                <div className='bottom flex space-x-2 mx-2'>
                    <p className='text-xs text-gray-400'>{props.ups} upvotes </p>
                    <p className='text-xs text-gray-400'>{props.awards} awards</p>
                </div>
            </div>
        </div>
        </Link>
    )
}
