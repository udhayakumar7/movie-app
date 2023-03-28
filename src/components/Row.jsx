import axios from '../helpers/axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import request from '../helpers/request';
import RowLoader from './loader/RowLoader';
import { Link } from 'react-router-dom';

const Row = ({ title, fetchUrl}) => {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);
const base_url = "https://image.tmdb.org/t/p/original/";
useEffect(() => {
const fetchData = async () => {
const request = await axios.get(fetchUrl);
setMovies(request.data.results);
setLoading(false)
console.log(loading, 'lllllll')
console.log(request.data.results)
return request;
};
fetchData();
}, [fetchUrl]);
var moviesRow = {
dots: false,
infinite: true,
slidesToShow: 8,
slidesToScroll: 3,
arrows: false,
// autoplay: true,
autoplaySpeed: 5000,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 6,
slidesToScroll: 3,
infinite: true,
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
}
},
{
breakpoint: 200,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
}
},
]
// centerMode:true
};
return (
    <>
    <div className='w-full'>
   <div className='pl-2 lg:pl-0 py-4'>
      <h2 className='text-white lg:text-xl  text-xs font-inter font-semibold header'>{title}</h2>
   </div>
   <div className=' relative w-full h-full'>
      

      <Slider className='w-full '  {...moviesRow}>
         {
         movies.map(( data, i)=>{
         return(

         <div key={i}>
            {
               loading ? 
               <RowLoader />

  :
               <div className=' w-11/12 h-full card_img  relative'>
             
                  <img className='h-full w-full  rounded-md lg:rounded-lg'  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="poster" />
               
               <div className='absolute  content left-0 p-2    h-2/5 bottom-0'>

                <p className='text-white text-xs font-inter'>{(data?.original_title  || 'Title').slice(0, 20)}</p>
                <p className=' text-gray-200 text-text-vs font-inter'>{(data.overview).slice(0, 25)}...</p>

               </div>
               <Link className='text-white text-xl abs cursor-pointer relative z-50' to={`/video/${data.id}`} >Gooo</Link>
            </div>
            }

            

         </div>
         )
         })
         }
      </Slider>


   </div>
</div>




    </>



)
}
export default Row