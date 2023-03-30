import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Searchbar = () => {
const base_url= "https://image.tmdb.org/t/p/original"

    const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState( true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8f1f147ace26bcf87ce6f133e897214d&query=${query}`);
      setData(res.data.results);
      setShow( ! show)
      console.log(res.data.results, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
  return (
    <div>

        <div className='px-6 hidden lg:inline-block w-full lg:w-96 relative'>

            <input 
             onChange={(e) => setQuery(e.target.value.toLowerCase())}
            className=' bg-transparent w-full px-4 py-2   focus-within:outline-none text-white  border-b-2 border-b-white ' placeholder='Seach Movies' type="text" name="search" id="" />
            {/* <i class="fa-solid fa-magnifying-glass absolute z-20  text-gray-500" style={{top:'5px',left:'20px'}}></i> */}
            {/* <i class="fas fa-check inp"></i> */}

            <div>
            
            </div>
            <div className={ show ? 'newscroll absolute w-3/4 h-96  overflow-y-auto bg-slate-900 z-50': 'newscroll absolute w-3/4 h-auto overflow-y-auto bg-slate-900 z-50'}>

                {
                    data.map((res, i)=>{
                        return(
                            
                            <div key={i}>
                                  <Link to={`/video/${res.id}`}>

                               


                               <div className='flex flex-row py-3 px-3 border-b-2 border-b-slate-700'>

                                <div >
             <img className='  w-16 h-16 object-contain'  src={`https://image.tmdb.org/t/p/original/${res.poster_path}`} alt="poster" />


                                </div>
                                <div>

                                    <p className='text-white pl-2 font-semibold'>{res.original_title}</p>

                                </div>



                               </div>
                               </Link>
                            </div>
                            
                        )
                    })
                }

            </div>
        </div>




    </div>
  )
}

export default Searchbar