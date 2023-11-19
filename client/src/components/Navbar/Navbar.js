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

  return (
    <>
      <nav className='nav'>
        <Link to='/' onClick={burger_class}>
          Hardware Store
        </Link>
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
      <div className={menuStat}>
        <Link to='/Cart' className='menuItem' onClick={burger_class}>
          Cart
        </Link>
        <Link to='/Contact' className='menuItem' onClick={burger_class}>
          Contact
        </Link>
      </div>
    </>
  );
}
