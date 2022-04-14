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
      'x-rapidapi-key': 'f8f6266ad8mshb9452ab8d3f306ap12014fjsne946f0c8d3a8',
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
