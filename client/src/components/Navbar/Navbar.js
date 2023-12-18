import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

// styles
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='nav'>
        <div>
          <Link
            to='/'
            onClick={() => {
              if (open) setOpen(!open);
            }}
          >
            Hardware Store
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/Cart' className='navItem'>
              Cart
            </Link>
          </li>
          <li>
            <Link to='/Contact' className='navItem'>
              Contact
            </Link>
          </li>
        </ul>
        <div
          className='hamburgerMenu'
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className='burger-bar'></div> {/* The bars */}
          <div className='burger-bar'></div>
          <div className='burger-bar'></div>
        </div>
      </nav>
      <div className={`menu ${open ? 'inactive' : 'active'}`}>
        <Link
          to='/Cart'
          className='menuItem'
          onClick={() => {
            setOpen(!open);
          }}
        >
          Cart
        </Link>
        <Link
          to='/Contact'
          className='menuItem'
          onClick={() => {
            setOpen(!open);
          }}
        >
          Contact
        </Link>
        <div
          className='credentials'
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Link to='/Login' className='credentialItem'>
            Login
          </Link>
          <Link
            to='/Signup'
            className='credentialItem'
            onClick={() => {
              setOpen(!open);
            }}
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
}
