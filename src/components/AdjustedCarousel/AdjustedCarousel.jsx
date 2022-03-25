import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const AdjustedCarousel = ({ moviesData }) => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={true}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {moviesData.map((movie) => (
        <div
          key={movie.book_id}
          className="card m-auto"
          style={{ width: '16rem', height: '28rem' }}
        >
          {/* <img src={movie.cover} className="card-img-top" alt="..." /> */}
          <img
            src={movie.cover}
            style={{ width: 'auto', height: '16rem' }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{movie.winning_category}</h5>
            <p className="card-text">{movie.name}</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary ">
              Add to Favorites
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
