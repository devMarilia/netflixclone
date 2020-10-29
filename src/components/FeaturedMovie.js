import React from 'react';
import './FeaturedMovie.css'

export default function FeaturedMovie({item}) {
 return (
   <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
   }}>
       <div className="featured-verdical">
          <div className="featured-horizontal">

          </div>
       </div>
   </section>
 );
}