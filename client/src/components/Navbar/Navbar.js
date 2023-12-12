import { Link } from 'react-router-dom';
import { useState } from 'react';

// styles
import './Navbar.css';

export default function Navbar() {
  const [burger_class, setBurger_class] = useState('burger-bar unclicked');
  const [menuStat, setMenuStat] = useState('menu hidden');

  const menuHandler = () => {
    if (burger_class === 'burger-bar unclicked') {
      setBurger_class('burger-bar clicked');
      setMenuStat('menu visible');
      console.log(burger_class);
    } else {
      setBurger_class('burger-bar unclicked');
      setMenuStat('menu hidden');
      console.log(burger_class);
    }
  };

  const navHomeHandler = () => {
    if (burger_class === 'burger-bar clicked') {
      setBurger_class('burger-bar unclicked');
      setMenuStat('menu hidden');
    }
  };

  return (
    <>
      <nav className='nav'>
        <div onClick={navHomeHandler}>
          <Link to='/' onClick={() => burger_class}>
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
        <div className='hamburgerMenu' onClick={menuHandler}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menuStat} onClick={menuHandler}>
        <Link to='/Cart' className='menuItem' onClick={() => burger_class}>
          Cart
        </Link>
        <Link to='/Contact' className='menuItem' onClick={() => burger_class}>
          Contact
        </Link>
        <div className='credentials'>
          <Link
            to='/Login'
            className='credentialItem'
            onClick={() => burger_class}
          >
            Login
          </Link>
          <Link
            to='/Signup'
            className='credentialItem'
            onClick={() => burger_class}
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
}
