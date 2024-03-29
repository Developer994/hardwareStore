import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import { ResultsContext } from '../../store/ResultsContext';

// Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PageContent.css';

export default function PageContent() {
  const { slider1Items } = useContext(ResultsContext);
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className='pgContentContainer'>
      <div className='jumbotron'></div>

      <div className='topItemsAndSLider'>
        <div className='topItems'>
          <div className='topItemsContainer'>
            <div className='topItem'></div>
            <div className='topItem'></div>
          </div>
          <div className='topItemsContainer'>
            <div className='topItem'></div>
            <div className='topItem'></div>
          </div>
          <div className='topItemsContainer'>
            <div className='topItem'></div>
            <div className='topItem'></div>
          </div>
          <div className='topItemsContainer' id='hiddenBelow1050'>
            <div className='topItem'></div>
            <div className='topItem'></div>
          </div>
        </div>
        <div className='slider'>
          <Slider {...settings2}>
            {slider1Items.map((item, id) => (
              <div className='topItemsCard' key={id}>
                <div className='card-top'>
                  <h1>{item.itemName}</h1>
                </div>
                <div className='card-bottom'>
                  <h3>{item.brand}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className='sliderContainer'>
        <Slider {...settings}>
          {slider1Items.map((item, id) => (
            <div className='card' key={id}>
              <div className='card-top'>
                <h1>{item.itemName}</h1>
              </div>
              <div className='card-bottom'>
                <h3>{item.brand}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='suggestions'>
        <div className='suggestionsRow'>
          <div className='suggestion'></div>
          <div className='suggestion'></div>
          <div className='suggestion'></div>
        </div>

        <div className='suggestionsRow'>
          <div className='suggestion'></div>
          <div className='suggestion'></div>
          <div className='suggestion'></div>
        </div>
      </div>
    </div>
  );
}
