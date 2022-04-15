import React, { useEffect, useState } from 'react';

//@vendor
import axios from 'axios';
import Slider from 'react-slick';
import ReactLoading from 'react-loading';

//@components
import { BookCarouselCard } from '../BookCarouselCard/BookCarouselCard';

//@style
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//@mocks
import mockData from '../../mock.json';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#9A4444',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#9A4444',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
}

function Carousel({ url, title }) {
  // const [booksData, setBooksData] = useState(mockData);
  const [booksData, setBooksData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    method: 'GET',
    url,
    headers: {
      'x-rapidapi-host': 'hapi-books.p.rapidapi.com',
      // 'x-rapidapi-key': '29832e245cmsh84cf072a4dfae26p1d7ffajsnd0805f8691e0',
      // 'x-rapidapi-key': 'cae01b8b10mshb91059cb2e2dee3p1340dcjsn8a0fe768097d',
      // 'x-rapidapi-key': 'eac11bbe89msh89fc5e8eafec9efp1a3f07jsnc1eb77c9c50a',
      // 'x-rapidapi-key': '991a7f0984msh3f3099a0170df8bp19fd75jsn273cadcdc26d',
      // 'x-rapidapi-key': 'f8f6266ad8mshb9452ab8d3f306ap12014fjsne946f0c8d3a8',
      'x-rapidapi-key': '1713f17896mshb24e8a79a109b29p17d705jsn88bb6f82bb66',
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
  }, []);

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    dots: true,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="container position-relative" style={{ width: '100%' }}>
      {isLoading ? (
        <div
          className="text-center "
          style={{ marginLeft: '46%', height: '4rem' }}
        >
          <ReactLoading type="bars" color="#9A4444" />
        </div>
      ) : (
        <div className="m-3">
          <Slider {...settings}>
            {booksData.map((book) => (
              <div key={book.book_id}>
                <BookCarouselCard book={book} title={title} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default Carousel;
