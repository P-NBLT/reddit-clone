import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { fetchCardDetails, selectDataForCard, selectLoadForCard } from './CardsSlice'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import downArrowPic from '../../media/downArrowPic.png'
import uppArrowPic from '../../media/uppArrowPic.png'
import whiteDown from '../../media/whiteDown.png'
import whiteUp from '../../media/whiteUp.png'
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import { useNavigate } from 'react-router-dom';

export default function Card() {
    const { id1, id2, id3 } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    // console.log(id1)


    const url = `r/${id1}/comments/${id2}/${id3}`
    // console.log(url)


    const data = useSelector(selectDataForCard)
    const load = useSelector(selectLoadForCard)
    // console.log(data.data.children[0].data)
    // console.log(`${data.data.children[0]}-han vai`)
   // console.log(data[0].data.children[0].data)
    //console.log(data[0].data.children[0].data.media.reddit_video.fallback_url)
    //  console.log(data[1].data.children)
    // console.log(data[0].data.children[0].data.post_hint)

    useEffect(() => {
        dispatch(fetchCardDetails(url))
    }, [])
    
    const closeHandler = ()=>{
         navigate(-1)
    }



    if (load) {
        return (
            <div className='bg-gray-800'>
                <div className='bg-gray-300 w-[800px] mx-auto'>


                    {/* */}
                    {/* Top section */}
                    <div className='text-white bg-black flex justify-between py-3 px-5 '>
                        <div className='flex'>
                            <img src={whiteUp} className='h-4 w-6 my-1' />
                            <p>{data[0].data.children[0].data.score > 99 ? `${data[0].data.children[0].data.score.toString().slice(0, 2)}.${data[0].data.children[0].data.score.toString().slice(2, 3)}k` : data[0].data.children[0].data.score}</p>



                            <img src={whiteDown} className='h-4 w-6 my-1' />
                            <div className='mx-2'>
                                <p className='text-sm'>{`${data[0].data.children[0].data.title.slice(0, 40)}...`}</p>
                            </div>
                        </div>
                        <button className='text-sm ' onClick={closeHandler}>X Close</button>
                    </div>



                    {/* Posts section*/}
                    <div className='mt-10 mx-2 bg-white flex'>
                        <div className='upvote mx-2 flex flex-col my-3 '>
                            <img src={uppArrowPic} width='18' />
                            <p>{data[0].data.children[0].data.score > 99 ? `${data[0].data.children[0].data.score.toString().slice(0, 2)}.${data[0].data.children[0].data.score.toString().slice(2, 3)}k` : data[0].data.children[0].data.score}</p>
                            <img src={downArrowPic} width='18' />

                        </div>
                        <div className='main flex flex-col'>

                            <p className='text-xs font-bold pb-4'>{data[0].data.children[0].data.subreddit_name_prefixed}</p>
                            <p className='font-semibold text-lg'>{data[0].data.children[0].data.title}</p>
                            <div className='flex justify-center'>

                                {data[0].data.children[0].data.post_hint == 'link'?
                                <a href={data[0].data.children[0].data.url} target='_blank'><p className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Link for the article</p></a>:
                                (data[0].data.children[0].data.post_hint == 'image' ?
                                    (<img src={data[0].data.children[0].data.url} className='w-[600px]' />) :
                                    <video controls autoPlay className='w-[600px]'>
                                        <source src={data[0].data.children[0].data.media.reddit_video.fallback_url} />
                                    </video>)}
                            </div>
                            <div className='flex space-x-4 font-semibold text-sm items-center text-gray-500 mt-4'>
                                <div className='flex items-center space-x-1'>
                                    <svg id="SvgjsSvg1001" width="18" height="28" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" ><defs id="SvgjsDefs1002"></defs><g id="SvgjsG1008"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="30" viewBox="0 0 400 400" ><path fillRule="evenodd" d="M47.324 5.509 C 25.272 9.239,6.536 26.715,1.246 48.487 C -0.888 57.270,-0.619 244.986,1.540 253.427 C 5.737 269.838,16.489 283.119,31.641 290.608 C 42.314 295.884,44.907 296.261,73.242 296.663 L 98.438 297.021 98.438 343.649 C 98.437 394.716,98.236 392.506,103.081 394.513 C 108.587 396.794,107.205 397.958,160.989 345.714 L 211.203 296.937 281.578 296.671 C 360.370 296.373,356.090 296.673,368.359 290.608 C 383.511 283.119,394.263 269.838,398.460 253.427 C 400.619 244.986,400.888 57.270,398.754 48.487 C 393.989 28.877,379.675 13.918,358.984 6.926 L 353.516 5.078 202.344 4.968 C 119.199 4.907,49.440 5.151,47.324 5.509 M350.442 21.934 C 365.301 24.628,377.738 36.256,382.548 51.953 C 384.775 59.221,384.775 242.342,382.548 249.609 C 377.741 265.294,364.546 277.185,349.219 279.643 C 345.972 280.163,318.978 280.459,274.371 280.463 L 204.601 280.469 193.121 291.368 C 186.807 297.363,166.699 316.822,148.438 334.611 L 115.234 366.954 114.844 326.174 C 114.431 283.103,114.544 284.399,110.938 281.470 C 110.069 280.764,102.798 280.510,82.813 280.488 C 52.190 280.453,48.174 280.020,39.453 275.814 C 28.797 270.674,21.097 261.503,17.452 249.609 C 16.092 245.169,16.016 239.949,16.016 150.781 L 16.016 56.641 17.761 51.172 C 22.719 35.637,34.367 24.927,49.609 21.888 C 54.607 20.892,344.937 20.936,350.442 21.934 " fill="#686868" className="svgShape"></path></svg></g></svg>
                                    <p>Comments</p>

                                </div>
                                <div className='flex items-center space-x-1'>
                                    <svg id="SvgjsSvg1011" width="18" height="28" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs"><defs id="SvgjsDefs1012"></defs><g id="SvgjsG1013"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="28" viewBox="0 0 400 400"><path fillRule="evenodd" d="M254.297 20.234 C 243.187 25.389,239.951 41.545,248.284 50.247 C 249.442 51.458,268.232 65.826,290.039 82.177 C 311.846 98.528,329.688 112.174,329.688 112.500 C 329.688 112.826,311.846 126.472,290.039 142.823 C 241.835 178.968,243.730 177.130,243.767 187.670 C 243.806 198.777,251.341 206.250,262.500 206.250 C 269.641 206.250,268.816 206.799,323.917 165.427 C 378.000 124.821,378.123 124.721,380.041 120.132 C 382.566 114.089,381.166 104.521,377.111 100.097 C 374.348 97.083,272.707 21.035,269.841 19.838 C 266.099 18.274,258.080 18.479,254.297 20.234 M260.938 94.597 C 133.448 106.775,32.425 208.062,19.560 336.606 C 16.241 369.766,20.918 381.291,37.670 381.233 C 51.472 381.185,56.025 374.504,57.052 352.794 C 61.519 258.352,120.546 177.881,209.176 145.406 C 230.262 137.680,259.468 132.031,278.326 132.031 L 285.178 132.031 298.024 122.461 C 305.089 117.197,310.872 112.715,310.874 112.500 C 310.876 112.285,305.317 107.979,298.522 102.930 L 286.166 93.750 276.872 93.856 C 271.760 93.915,264.590 94.248,260.938 94.597 " fill="#878a8c" className="color000 svgShape"></path></svg></g></svg>
                                    <p>Share</p>
                                </div>
                                <div className='flex items-center space-x-1'>
                                    <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="30" viewBox="0, 0, 400,400"><g id="svgg" ><path id="path0" d="M74.396 1.897 C 62.280 6.411,53.263 16.526,50.821 28.344 C 50.230 31.206,50.040 84.118,50.185 205.859 L 50.391 379.297 52.590 383.594 C 58.243 394.640,66.776 399.611,80.078 399.607 C 93.505 399.602,90.057 402.348,143.359 349.221 C 192.685 300.059,192.239 300.443,200.000 300.443 C 207.753 300.443,207.290 300.044,256.641 349.224 C 309.944 402.343,306.502 399.602,319.922 399.607 C 332.955 399.611,342.277 394.222,347.450 383.692 L 349.609 379.297 349.815 205.859 C 349.960 84.118,349.770 31.206,349.179 28.344 C 347.037 17.977,339.236 8.305,328.963 3.283 L 323.047 0.391 201.172 0.231 L 79.297 0.071 74.396 1.897 M318.359 25.121 C 321.396 26.796,323.903 29.519,324.948 32.277 C 326.527 36.446,326.076 372.599,324.488 374.353 C 320.464 378.799,321.828 379.949,270.737 329.045 C 217.052 275.557,217.386 275.808,200.000 275.808 C 182.614 275.808,182.948 275.557,129.263 329.045 C 78.404 379.717,79.964 378.395,75.647 374.488 C 74.272 373.243,74.219 366.894,74.219 203.119 L 74.219 33.044 75.977 30.461 C 78.230 27.150,81.143 25.008,84.471 24.214 C 90.275 22.830,315.791 23.704,318.359 25.121 " stroke="none" fill="#686868" fillRule="evenodd"></path></g></svg>
                                    <p>Save</p>
                                </div>

                                <p>Hide</p>
                                <p>Report</p>
                                <p>Tip</p>
                            </div>
                        </div>
                    </div>



                    {/* Sign up and Sign in Section */}
                    <div className=' signUp bg-white py-1 mt-4 flex justify-center'>
                        <div className='border-[1px] border-gray-300 flex bg-white mt-4 mx-2 px-4 text-gray-400 font-semibold py-3 justify-between rounded w-[650px]'>
                            <div>
                                <p>Log in or sign up to leave a comment</p>
                            </div>
                            <div>
                                <button className=' font-semibold border-2 border-blue-500 rounded-2xl w-24 text-blue-500 p-[2px] mx-1 hover:bg-blue-100'>Log In</button>
                                {/* <LoginPage /> */}
                                <button className='bg-blue-500 text-white w-24 rounded-2xl border-2 border-blue-500 p-[2px] font-semibold hover:bg-blue-400'>Sign Up</button>
                                {/* <SignUpPage /> */}
                            </div>
                        </div>
                    </div>



                    {/* Comments Section */}
                    <div className='comments bg-white'>
                        {data[1].data.children.map((e) => {
                            return (
                                <div className='mx-10 py-5'>
                                    <p className='font-semibold text-sm'>{e.data.author}</p>
                                    <p>{e.data.body}</p>
                                    <div className='flex items-center space-x-2'>
                                        <img src={uppArrowPic} className='w-4 h-4' />
                                        <p>{e.data.ups}</p>
                                        <img src={downArrowPic} className='w-4 h-4' />
                                        <div className='flex items-center space-x-1'>
                                            <svg id="SvgjsSvg1001" width="18" height="28" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.com/svgjs" ><defs id="SvgjsDefs1002"></defs><g id="SvgjsG1008"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="30" viewBox="0 0 400 400" ><path fillRule="evenodd" d="M47.324 5.509 C 25.272 9.239,6.536 26.715,1.246 48.487 C -0.888 57.270,-0.619 244.986,1.540 253.427 C 5.737 269.838,16.489 283.119,31.641 290.608 C 42.314 295.884,44.907 296.261,73.242 296.663 L 98.438 297.021 98.438 343.649 C 98.437 394.716,98.236 392.506,103.081 394.513 C 108.587 396.794,107.205 397.958,160.989 345.714 L 211.203 296.937 281.578 296.671 C 360.370 296.373,356.090 296.673,368.359 290.608 C 383.511 283.119,394.263 269.838,398.460 253.427 C 400.619 244.986,400.888 57.270,398.754 48.487 C 393.989 28.877,379.675 13.918,358.984 6.926 L 353.516 5.078 202.344 4.968 C 119.199 4.907,49.440 5.151,47.324 5.509 M350.442 21.934 C 365.301 24.628,377.738 36.256,382.548 51.953 C 384.775 59.221,384.775 242.342,382.548 249.609 C 377.741 265.294,364.546 277.185,349.219 279.643 C 345.972 280.163,318.978 280.459,274.371 280.463 L 204.601 280.469 193.121 291.368 C 186.807 297.363,166.699 316.822,148.438 334.611 L 115.234 366.954 114.844 326.174 C 114.431 283.103,114.544 284.399,110.938 281.470 C 110.069 280.764,102.798 280.510,82.813 280.488 C 52.190 280.453,48.174 280.020,39.453 275.814 C 28.797 270.674,21.097 261.503,17.452 249.609 C 16.092 245.169,16.016 239.949,16.016 150.781 L 16.016 56.641 17.761 51.172 C 22.719 35.637,34.367 24.927,49.609 21.888 C 54.607 20.892,344.937 20.936,350.442 21.934 " fill="#686868" className="svgShape"></path></svg></g></svg>
                                            <p className='text-sm font-semibold text-gray-500'>Reply</p>
                                        </div>
                                        <p className='text-sm font-semibold text-gray-500'>Share</p>
                                        <p className='text-sm font-semibold text-gray-500'>Report</p>
                                        <p className='text-sm font-semibold text-gray-500'>Save</p>
                                        <p className='text-sm font-semibold text-gray-500'>Tip</p>
                                        <p className='text-sm font-semibold text-gray-500'>Follow</p>
                                    </div>
                                </div>
                            )
                        }).slice(0, 20)}
                    </div>
                </div>
            </div>
        )
    }
}
