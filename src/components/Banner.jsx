import axios from '../helpers/axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import request from '../helpers/request';
const Banner = () => {
const base_url= "https://image.tmdb.org/t/p/original"
const [movie, setMovie] = useState([])
// const [trim, setTrim] = useState(flase)
useEffect(() => {
const fethData = async () => {
const requestmovie = await axios.get(request.fetchMore)
console.log(requestmovie.data.results);
setMovie(requestmovie.data.results)
return requestmovie;
}
fethData()
}, [])
var settings = {
dots: false,
infinite: true,
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
autoplay: false,
autoplaySpeed: 5000,
// centerMode:true
dots: true
};
return (
<>
<div className='home banner' >
   <Slider className='w-full '  {...settings}>
      {
      movie.map((moviedata, i)=>{
      return(
      <div key={i}>
          {/* rounded-t-2xl rounded-bl-xl */}
         <div className=' md:h-80  lg:h-80 xl:h-h-banner h-52 bg-cover  bg-no-repeat ' style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${moviedata?.backdrop_path  || moviedata?.poster_path } ")`, backgroundPosition: 'top center',borderRadius:'0px'}}>
         <div className='h-full  bg_gradient p-5 '>
            <div className='flex h-full lg:p-5 lg:pb-15 w-2/5 flex-col justify-center lg:justify-end'>
               <h1 className='text-white text-xs font-inter font-semibold lg:text-4xl pt-20 '>{moviedata?.title || 'Tittle'}</h1>
               <h2 className='text-gray-300 hidden lg:block text-md font-inter font-normal py-3'>{(moviedata.overview || 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed').slice(0, 200)}...</h2>
               <h2 className='text-gray-300 block lg:hidden  text-text-vs  font-inter font-normal py-1'>{(moviedata.overview ).slice(0, 50)}...</h2>
               <h2 className='text-gray-300  text-text-vs lg:text-xs lg:mt-2 mt-1 font-semibold'>Ratting :<span className=''> {moviedata.vote_average} / 10</span>
               </h2>
            </div>
         </div>
      </div>
</div>
)
})
}
</Slider>
</div>
<div>
</div>
</>
)
}
export default Banner