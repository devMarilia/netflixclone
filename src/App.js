import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'

export default function App() {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

useEffect(() => {
  const loadAll = async () => {
    //Pegando a lista total
    let list = await Tmdb.getHomeList();
    setMovieList(list)

    //Pegando a Fetuared
    let originals = list.filter(i=> i.slug === 'originals')
    let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
    let chosen = originals[0].items.results[randonChosen]
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
  }

  loadAll()
}, [])


 return (
  <div className="page">

    {featuredData && 
      <FeaturedMovie item={featuredData}/>
    }

    <section className="listas">
      {movieList.map((item, key) => (
        <MovieRow key={key} title={item.title} items={item.items}/>
      ))}
    </section>
  </div>
 );
}