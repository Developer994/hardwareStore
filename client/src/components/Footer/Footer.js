import React from 'react';

// Styles
import './Footer.css';

export default function Footer() {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h4>Hardware Store Ltd</h4>
            <ul className='list-unstyled'>
              <li>XX Airport Rd</li> <li>Brampton, Ontario</li>
              <li>L6V XXX</li>
            </ul>
          </div>
          <div className='col'>
            <h4>Contact us</h4>
            <ul className='list-unstyled'>
              <li>Phone number</li>
              <li>Email</li>
              <li>Q&A</li>
            </ul>
          </div>
          <div className='col'>
            <h4>Social Media</h4>
            <ul className='list-unstyled'>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>X</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className='row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} Hardware Store Ltd | All rights
            reserved | Terms of service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}
