import React from 'react'
import Results from '../Components/Results';

export default async function SearchPage({params}) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=true`);

    if(!res.ok) {
        throw new Error('Error fetching movie');
    }

    const movie = await res.json();
    const results = movie.results; 
  return (
    <div>
      {results && results.length === 0  &&(
        <h1 className='text-center pt-6'>No results found</h1>
      )}

      {results && <Results results={results}/>}
    </div>
  )
}
