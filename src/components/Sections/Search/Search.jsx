import React, { useState } from 'react'
import './Search.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { BookResultCard } from '../../BookResultCard/BookResultCard'
import Swal from 'sweetalert2'



export const Search = () => {
  const [bookName, setBookName] = useState('');
  const [searchResult, setSearchResult] = useState([])


  const handleInputChange = (event) => {
    event.preventDefault();
    setBookName(event.target.value);
  }

  const handleSearchButton = (event) => {

    Swal.fire({
      title: `Searching for "${bookName}"`,
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })

    event.preventDefault();

    const options = {
      method: 'GET',
      url: `https://hapi-books.p.rapidapi.com/search/${bookName}`,
      headers: {
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_APIKEY,
      }
    };

    axios.request(options).then(function (response) {
      setSearchResult(response.data);
      Swal.close()
    }).catch(function (error) {
      console.error(error);
    });
  }


  return (
    <section className='search'>
      <div className="search-form">
        <input
          className="add-input"
          type="text"
          placeholder="Book name"
          value={bookName}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchButton}><FontAwesomeIcon style={{marginRight: '10px'}} icon={faMagnifyingGlass}/></button>
      </div>
      <div className="search-results">
      {
       searchResult.length > 0 && (
          <ul className="search-results-list">
            {searchResult.map(book => (
              <BookResultCard book={book}/>
            ))}
          </ul>
        )
      }
      </div>
    </section>
  )
} 