import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ReactPlayer from 'react-player/lazy'
import request from '../helpers/request'




const MovieDetailPage = () => {

  const { id } = useParams();
console.log(id)
  const [videos, setVideos]= useState([])
const [newvideo, setNewvideo]= useState('')
const [thumb, setThumb]= useState('')
const [name, setName]= useState('')
const [overview, setOverview]= useState('')
const [details, setDetails]= useState([])

 useEffect(() => {

    const getDetail = async () =>{

     const movieData = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8f1f147ace26bcf87ce6f133e897214d`).then((res =>{
      console.log(res.data.results, "asdfghjkkjhgfdsdfgh" )
      setVideos(res.data.results)
     }))

    }

    window.scrollTo(0, 0)

    
    getDetail()
    return () => {
      
    }

  
  }, [])

  useEffect(() => {

    const getDetail = async () =>{

     const movieData = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8f1f147ace26bcf87ce6f133e897214d`).then((res =>{
      console.log(res.data, "thumbnail" )
      setThumb(res.data.backdrop_path)
      setName(res.data.original_title ,'kk')
      setOverview(res.data.overview)
      // setDetails(res)
     }))

    }


    
    getDetail()
    return () => {
      
    }

  
  }, [])


  useEffect(() => {

    const dopData = () =>{
      if(videos.find(x => x.type === "Trailer")){

        const resulted = videos.filter(y=> y.type === 'Trailer')
        // console.log(resulted[1] || '404page', 'rgfhfhgfghfh')
        //  console.log(resulted[1].key || '404page', 'lllll')

         const keywes = resulted[1]?.key || "OKBMCL-frPU"
     
         setNewvideo(keywes)
       
     
     
     
     
       }
      
    }
    dopData()
  
    return () => {
      
    }
  }, [videos])
  
  

  useEffect(() => {

    const getDetailss = async () =>{

     const movieData1 = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=8f1f147ace26bcf87ce6f133e897214d&language=ta&year=2022`).then((res =>{
      console.log(res.data.results, "morelike" )
      setDetails(res.data.results)
     }))

    }


    
    getDetailss()

    return () => {
      
    }

  
  }, [])
  











  return (
    <div>

     <Navbar />

     <div>

     <div className=' md:h-80  lg:h-80 xl:h-h-movie h-52'>

<ReactPlayer height='100%' playing controls={true} width="100%"
       light={`https://image.tmdb.org/t/p/original${thumb}`} url={`https://www.youtube.com/embed/${newvideo}`} />







</div>

<div className='  mx-8 my-6 py-5 px-4'>


  <h3 className='text-white text-lg lg:text-3xl font-inter font-semibold '>{name}</h3>

  <h3 className='text-gray-600 py-3 text-sm lg:text-lg font-inter  font-normal '>{overview}</h3>



</div>
<div className='mx-8 my-6 py-5 px-4'>

  <h3 className='text-white text-lg lg:text-2xl border-b-gray-600 border-b-2 pb-6 font-inter font-semibold'  >More Like This</h3>

  <div className='grid gap-4 grid-cols-2 lg:grid-cols-7 my-8'>

    {
      details.map((more, i)=>{

        return(

          <div className='card_img  relative'>

            <img className=' rounded-2xl ' src={`https://image.tmdb.org/t/p/original/${more?.poster_path || more?.backdrop_path}`} alt="" />

            <div className='absolute  content left-0 p-2    h-2/5 bottom-0'>

           <p className='text-white lg:text-base text-xs font-inter'>{(more?.original_title  || 'Title').slice(0, 20)}</p>
           <p className=' text-gray-200 text-text-vs font-inter'>{(more.overview).slice(0, 25)}...</p>
           <Link to={`/video/${more.id}`}>
           <span className='w-full inline-block mt-2 rounded-lg text-sm font-semibold bg-slate-300 px-4 py-1 text-center'>Watch now</span>
           </Link>
          </div>



            </div>



        )
      })
    }




  </div>
  
  



</div>








     </div>
     












      {/* {
        videos.map((data, i)=>{
          return(
<iframe key={i} width="560" height="315" src={`https://www.youtube.com/embed/${data.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          )
        })
      } */}


{/* {
  newvideo.map((bb, i)=>{
    return(

      <iframe key={i} width="560" height="315" src={`https://www.youtube.com/embed/${bb.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    )
  })
} */}
{/* <iframe  width="560" height="315" src={`https://www.youtube.com/embed/${newvideo[1].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

{/* <iframe  width="560" height="315" src={`https://www.youtube.com/embed/${newvideo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<p className='text-white text7xl'>{}</p> */}




    </div>
  )
}

export default MovieDetailPage