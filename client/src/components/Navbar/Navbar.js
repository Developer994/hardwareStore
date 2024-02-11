import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

// styles
import './Navbar.css';

export default function Navbar() {
  const [menuState, setMenuState] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!ref.current.contains(e.target)) {
        setMenuState(false);
      }
    };
    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <>
      <nav className='nav'>
        <div>
          <Link
            to='/'
            onClick={() => {
              if (menuState) setMenuState(!menuState);
            }}
          >
            Hardware Store
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/Cart' className='navItem'>
              <span
                className='material-symbols-outlined'
                id='Cart'
                alt='shopping_cart'
              >
                shopping_cart
              </span>
            </Link>
          </li>
          <li>
            <Link to='/Contact' className='navItem' id='Contact'>
              <span className='material-symbols-outlined' alt='contact'>
                call
              </span>
            </Link>
          </li>
          <li>
            <Link to='/Signin' className='navItem' id='Contact' alt='Signin'>
              <span className='material-symbols-outlined'>person</span>
            </Link>
          </li>
        </ul>
        <div
          className='hamburgerMenu'
          onClick={() => {
            setMenuState((state) => !state);
          }}
          ref={ref}
        >
          {/* The bars */}
          <div
            className={`burger-bar ${menuState ? 'clicked' : 'unclicked'}`}
          ></div>
          <div
            className={`burger-bar ${menuState ? 'clicked' : 'unclicked'}`}
          ></div>
          <div
            className={`burger-bar ${menuState ? 'clicked' : 'unclicked'}`}
          ></div>
        </div>
      </nav>
      <div className={`menu ${menuState ? 'inactive' : 'active'}`}>
        <Link
          to='/Cart'
          className='menuItem'
          onClick={() => {
            setMenuState(!menuState);
          }}
        >
          Cart
        </Link>
        <Link
          to='/Contact'
          className='menuItem'
          onClick={() => {
            setMenuState(!menuState);
          }}
        >
          Contact
        </Link>
        <div
          className='credentials'
          onClick={() => {
            setMenuState(!menuState);
          }}
        >
          <Link to='/Login' className='credentialItem'>
            Login
          </Link>
          <Link
            to='/Signup'
            className='credentialItem'
            onClick={() => {
              setMenuState(!menuState);
            }}
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
}
