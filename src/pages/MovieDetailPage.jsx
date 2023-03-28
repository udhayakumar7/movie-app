import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ReactPlayer from 'react-player/lazy'


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
      setDetails(res)
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
        console.log(resulted[1], 'rgfhfhgfghfh')
         console.log(resulted[1].key, 'lllll')

         const keywes = resulted[1].key
     
         setNewvideo(keywes)
       
     
     
     
     
       }
      
    }
    dopData()
  
    return () => {
      
    }
  }, [videos])
  
  


  











  return (
    <div>

     <Navbar />

     <div>

     <div className=' md:h-80  lg:h-80 xl:h-h-banner h-52'>

<ReactPlayer height='100%' playing controls={true} width="100%"
       light={`https://image.tmdb.org/t/p/original${thumb}`} url={`https://www.youtube.com/embed/${newvideo}`} />







</div>

<div className='  mx-8 my-6 py-5 px-4'>


  <h3 className='text-white text-3xl font-inter font-semibold '>{name}</h3>

  <h3 className='text-gray-600 py-3 text-lg font-inter  font-normal '>{overview}</h3>



</div>

{/* {
  details.map((detail, i)=>{

    return(

      <p>{detail.release_date}</p>
    )
  })
} */}







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