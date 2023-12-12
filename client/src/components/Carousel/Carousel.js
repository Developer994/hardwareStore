import { useReducer } from 'react';
// Styles
import './Carousel.css';
export default function Carousel() {
  return (
    <>
      <div className='carousel'>
        <div className='left-button'>leftbutton</div>
        <div className='carousel-content'>Carousel</div>
        <div className='right-button'>rightbutton</div>
      </div>
    </>
  );
}
