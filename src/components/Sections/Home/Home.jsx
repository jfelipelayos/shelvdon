import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Home.css';
import { AdjustedCarousel } from '../../AdjustedCarousel/AdjustedCarousel';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesData, setMoviesData] = useState([]);

  const options = {
    method: 'GET',
    url: `https://hapi-books.p.rapidapi.com/top/2021`,
    headers: {
      'x-rapidapi-host': 'hapi-books.p.rapidapi.com',
      // 'x-rapidapi-key': '29832e245cmsh84cf072a4dfae26p1d7ffajsnd0805f8691e0'
      'x-rapidapi-key': 'eac11bbe89msh89fc5e8eafec9efp1a3f07jsnc1eb77c9c50a',
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
