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
      'x-rapidapi-key': process.env.REACT_APP_APIKEY
    },
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .request(options)
      .then(function (response) {
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
