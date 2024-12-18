import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import { ResultsContext } from '../../context/ResultsContext';

// Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePageContent.css';

export default function HomePageContent() {
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
      <div className='jumbotron'>
        <img
          src={require('./images/jumbotron.jpg')}
          alt=''
          width='100%'
          height='100%'
        />
      </div>

      <div className='topItemsAndSLider'>
        <div className='topItems'>
          <div className='topItemsTitle'>Top Items</div>
          <div className='topItemContent'>
            {slider1Items
              .filter((item) => {
                if (item.topItem) return item;
              })
              .map((item, id) => (
                <div className='topItemsCard' key={id}>
                  <h3>{item.brand}</h3>
                  <div>{item.itemName}</div>
                  <img className='topItemImg' src={item.image} />
                  <div>
                    {item.price} <button>Add to Cart</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className='slider'>
          <Slider {...settings2}>
            {slider1Items.map((item, id) => (
              <div className='topItemsSldrCard' key={id}>
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

      <div className='freqBoughtSldrContainer'>
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
          <div className='suggestion'>
            <img
              className='suggestionImage'
              src={require('./images/paintSection.jpg')}
              alt=''
            />
          </div>
          <div className='suggestion'>
            <img
              className='suggestionImage'
              src={require('./images/faucet.jpg')}
              alt=''
            />
          </div>
          <div className='suggestion'>
            <img
              className='suggestionImage'
              src={require('./images/stove.jpg')}
              alt=''
            />
          </div>
        </div>

        <div className='suggestionsRow'>
          <div className='suggestion'>
            <img
              className='suggestionImage'
              src={require('./images/lawnMower.jpg')}
              alt=''
            />
          </div>
          <div className='suggestion'>
            <img
              className='suggestionImage'
              src={require('./images/snowShovel.jpg')}
              alt=''
            />
            snow accessories on sale
          </div>
          <div className='suggestion'>
            <img
              className='suggestionImage'
              src={require('./images/bathroom.jpg')}
              alt=''
            />
            Vanities and bath tubs on low prices
          </div>
        </div>
      </div>
    </div>
  );
}
