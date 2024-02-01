import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import { ResultsContext } from '../../store/ResultsContext';

// Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PageContent.css';
import { set } from 'mongoose';

export default function PageContent() {
  const { slider1Items } = useContext(ResultsContext);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='pgContentContainer'>
      <div className='adContainer'></div>
      {/* <div
        className='blankContainer'
        style={{ width: '500px', height: '500px', backgroundColor: 'blue' }}
      ></div> */}

      <div className='resultsCont'>
        <Slider {...settings}>
          {slider1Items.map((item, id) => (
            <div className='card' key={id}>
              <div className='card-top'>
                <h1>{item.toolName}</h1>
              </div>
              <div className='card-bottom'>
                <h3>{item.brand}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
