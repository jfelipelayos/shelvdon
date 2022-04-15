import React from 'react';

//@vendor

//@components
import Carousel from '../../Carousel/Carousel';

//@style
import './Home.css';

export const Home = () => {
  return (
    <>
      <div className="mt-3">
        <h2 className="text-center ">Awarded Books</h2>
      </div>
      <div className="container text-center" style={{ width: '100%' }}>
        <Carousel
          url={'https://hapi-books.p.rapidapi.com/top/2021'}
          title={'winning_category'}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-center">Romance</h2>
      </div>
      <div className="container text-center" style={{ width: '100%' }}>
        <Carousel
          url={'https://hapi-books.p.rapidapi.com/nominees/romance/2021'}
          title={'author'}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-center">Fantasy</h2>
      </div>
      <div className="container text-center" style={{ width: '100%' }}>
        <Carousel
          url={'https://hapi-books.p.rapidapi.com/nominees/fantasy/2021'}
          title={'author'}
        />
      </div>
      <div className="mt-4">
        <h2 className="text-center">Poetry</h2>
      </div>
      <div className="container text-center" style={{ width: '100%' }}>
        <Carousel
          url={'https://hapi-books.p.rapidapi.com/nominees/poetry/2021'}
          title={'author'}
        />
      </div>
    </>
  );
};
