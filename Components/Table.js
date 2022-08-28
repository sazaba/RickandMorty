import React, { useEffect, useState } from 'react'
import Characters from './Characters';

function Table() {
    const [characters, setCharacters] = useState([]);

    const initialUrl = 'https://rickandmortyapi.com/api/character';
    
    const fetchCharacters = (url) =>{
    fetch(url)
    .then(response => response.json())
    // .then(data => console.log(data.results.length))
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))
    };

     useEffect(()=>{
        fetchCharacters(initialUrl)
     },[])

  return (
    <div>
        <Characters characters = {characters}/>
    </div>
  )
}

export default Table