import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css'
import MovieRow from './components/MovieRow'

export default function App() {

  const [movieList, setMovieList] = useState([])

useEffect(() => {
  const loadAll = async () => {
    //Pegando a lista total
    let list = await Tmdb.getHomeList();
    setMovieList(list)
  }

  loadAll()
}, [])


 return (
  <div className="page">
    <div className="listas">
      {movieList.map((item, key) => (
        <MovieRow key={key} title={item.title} items={item.items}/>
      ))}
    </div>
  </div>
 );
}