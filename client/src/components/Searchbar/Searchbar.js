import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ResultsContext } from '../../store/ResultsContext';

// Styles
import './Searchbar.css';

export default function Searchbar() {
  const { query, results, handleChange, handleSubmit } =
    useContext(ResultsContext);
  const [catMenuVisible, setCatMenuVisible] = useState(false); // The menu for the categories next to the search bar

  // useEffect for clicking outside of the categories menu
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const closeCatMenu = (e) => {
      if (!ref.current.contains(e.target)) {
        setCatMenuVisible(false);
      }
    };

    document.body.addEventListener('click', closeCatMenu);
    return () => document.body.removeEventListener('click', closeCatMenu);
  }, []);

  return (
    <>
      <div className='search'>
        <div>
          <form className='searchForm'>
            <div className='searchBarDiv'>
              <div className='searchBar'>
                <input
                  type='text'
                  placeholder='Enter something'
                  className='inputBar'
                  onChange={handleChange}
                  value={query}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      if (query.trim().length === 0) {
                        event.preventDefault();
                      } else {
                        handleSubmit();
                        navigate(`/SearchResultsPage/${query}`);
                      }
                    }
                  }}
                />
                <div>
                  <Link
                    value='Search'
                    type='submit'
                    to={query === '' ? '/' : `/SearchResultsPage/${query}`}
                    className='searchButton'
                    onClick={handleSubmit}
                  >
                    <span className='material-symbols-outlined'>search</span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className='categories'
              onClick={() => setCatMenuVisible((visible) => !visible)}
              ref={ref}
            >
              Categories
            </div>
            <div className={`catMenu ${catMenuVisible ? 'visible' : 'hidden'}`}>
              <li>Screw Drivers</li>
              <li>Hammers</li>
              <li>Drills</li>
              <li>Ladders</li>
              <li>Manual Staplers</li>
              <li>Paint</li>
              <li>Misc.</li>
            </div>
          </form>
          <br />
          <div className={`searchResults`}>
            {results
              .filter((item) => {
                if (query === '') {
                  return query; // change to item to display all items
                } else if (
                  item.itemName.toLowerCase().includes(query.toLowerCase()) ||
                  item.brand.toLowerCase().includes(query.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, id) => (
                <div key={id}>
                  <h1>{item.itemName}</h1>
                  <h3>{item.brand}</h3>
                  <h5>{item.price}</h5>
                  <button>add to cart</button>
                </div>
              ))
              .slice(0, 3)}
          </div>
        </div>
      </div>{' '}
    </>
  );
}
