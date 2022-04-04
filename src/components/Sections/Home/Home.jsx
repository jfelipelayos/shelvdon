import React, { useEffect, useState } from 'react';

//@vendor
import axios from 'axios';

//@components
import { AdjustedCarousel } from '../../AdjustedCarousel/AdjustedCarousel';

//@style
import './Home.css';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesData, setMoviesData] = useState([]);

  const options = {
    method: 'GET',
    url: `https://hapi-books.p.rapidapi.com/top/2021`,
    headers: {
      'x-rapidapi-host': 'hapi-books.p.rapidapi.com',
      // 'x-rapidapi-key': '29832e245cmsh84cf072a4dfae26p1d7ffajsnd0805f8691e0'
      'x-rapidapi-key': 'cae01b8b10mshb91059cb2e2dee3p1340dcjsn8a0fe768097d',
    },
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMoviesData(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mt-4" style={{ maxWidth: '90%' }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <AdjustedCarousel moviesData={moviesData} />
      )}
    </div>
  );
};
