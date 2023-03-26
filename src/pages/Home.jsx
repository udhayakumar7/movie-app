import React from 'react'
import request from '../helpers/request';

import Navbar from '../components/Navbar'
import Banner from '../components/Banner';
import Row from '../components/Row';

const Home = () => {
  

  return (
    <>
    <Navbar/>
    <Banner/>
    <Row title="Latest & Trending"
        fetchUrl={request.fetchTrending} />
        <Row title="Top Rated"
        fetchUrl={request.fetchTopRated} />
         <Row title="Kids"
        fetchUrl={request.fetchAnimation} />
         <Row title="Horror"
        fetchUrl={request.fetchHorrorMovies} />
        <Row title="Mystery"
        fetchUrl={request.fetchMysteryMovies} />
          <Row title="Sci-Fi"
        fetchUrl={request.fetchSciFi} />
          <Row title="Western"
        fetchUrl={request.fetchWestern} />
            <Row title="TV Shows"
        fetchUrl={request.fetchTV} />
         <Row title="Indian"
        fetchUrl={request.fetchDiscover} />
        <Row title="Comdey"
        fetchUrl={request.fetchComdeyMovies} />
        <Row title="Romance"
        fetchUrl={request.fetchRomanceMovies} />
        
        {/* fetchRomanceMovies
        fetchMysteryMovies
        fetchSciFi
        fetchWestern
        fetchTV
        fetchDiscover
        fetchComdeyMovies */}

    



    </>
  )
}

export default Home