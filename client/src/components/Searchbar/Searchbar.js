import React, { useState, useEffect, useRef } from 'react';
import './Searchbar.css';

function Searchbar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [catMenuVisible, setCatMenuVisible] = useState(false); // The menu for the categories next to the search bar

  const handleChange = (event) => {
    event.preventDefault();
    const userInput = event.target.value;
    setQuery(userInput);
  };

  // useEffect for clicking outside of the categories menu
  const ref = useRef();

  useEffect(() => {
    const closeCatMenu = (e) => {
      if (!ref.current.contains(e.target)) {
        setCatMenuVisible(false);
      }
    };

    document.body.addEventListener('click', closeCatMenu);
    return () => document.body.removeEventListener('click', closeCatMenu);
  }, []);

  // When the query state changes ([query]), we then run the effect
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:4000/tools/?q=${query}`);
        const json = await response.json();
        // console.log({ json });
        setResults(
          json.map((item) => {
            return item;
          })
        );
      } catch (err) {
        console.error(err.message);
      }
    }

    if (query !== '') {
      fetchData();
    } else {
    }
  }, [query]);

  return (
    <div className='search'>
      {/* <div>Search for tools</div> */}
      <div>
        <div className='searchForm' action='/search'>
          <div className='searchBar'>
            <input
              type='search'
              placeholder='Enter something'
              className='inputBar'
              onChange={handleChange}
              value={query}
            />
            <input type='submit' value='Search' className='searchbutton' />
            {/* <button type='submit' value='Search'>
            Submit
          </button> */}
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
        </div>
        <br />
        <div className={`searchResults`}>
          {results
            .filter((item) => {
              if (query === '') {
                return query; // change to item to display all items
              } else if (
                item.toolName.toLowerCase().includes(query.toLowerCase()) ||
                item.brand.toLowerCase().includes(query.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, id) => (
              <div key={id}>
                <h1>{item.toolName}</h1>
                <h3>{item.brand}</h3>
                <h5>{item.price}</h5>
                <button>add to cart</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
