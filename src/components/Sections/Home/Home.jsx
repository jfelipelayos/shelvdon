import React, { useEffect, useState } from 'react';

//@vendor
import axios from 'axios';

//@components
import { AdjustedCarousel } from '../../AdjustedCarousel/AdjustedCarousel';
import Carousel from '../../Carousel/Carousel';
import { BookCarouselCard } from '../../BookCarouselCard/BookCarouselCard';

//@style
import './Home.css';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [booksData, setBooksData] = useState([]);

  const options = {
    method: 'GET',
    url: `https://hapi-books.p.rapidapi.com/top/2021`,
    headers: {
      'x-rapidapi-host': 'hapi-books.p.rapidapi.com',
      // 'x-rapidapi-key': '29832e245cmsh84cf072a4dfae26p1d7ffajsnd0805f8691e0',
      // 'x-rapidapi-key': 'cae01b8b10mshb91059cb2e2dee3p1340dcjsn8a0fe768097d',
      // 'x-rapidapi-key': 'eac11bbe89msh89fc5e8eafec9efp1a3f07jsnc1eb77c9c50a',
      'x-rapidapi-key': '991a7f0984msh3f3099a0170df8bp19fd75jsn273cadcdc26d',
      // 'x-rapidapi-key': 'f8f6266ad8mshb9452ab8d3f306ap12014fjsne946f0c8d3a8',
    },
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setBooksData(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setIsLoading(false);
      });
    // return () => {
    //   setBooksData([]);
    // };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            maxWidth: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 64,
          }}
        >
          <Carousel infiniteLoop={true}>
            {booksData.map((book) => (
              <div key={book.book_id}>
                <div style={{ padding: 8 }}>
                  <BookCarouselCard book={book} />
                </div>
              </div>
            ))}
            {/* <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="placeholder"
                  style={{ width: '100%' }}
                />
              </div>
            </div> */}
          </Carousel>
        </div>
      )}
    </div>
  );
};
