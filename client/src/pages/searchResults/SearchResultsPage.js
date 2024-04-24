import React, { useContext } from 'react';
import './SearchResultsPage.css';
import { ResultsContext } from '../../store/ResultsContext';

// Styles
import './SearchResultsPage.css';

export default function SearchResultsPage() {
  const { searchResults, results } = useContext(ResultsContext);

  return (
    <div className='searchResultsContainer'>
      <div className={`searchResultsPg`}>
        {results
          .filter((item) => {
            if (searchResults === '') {
              return searchResults; // change to item to display all items
            } else if (
              item.itemName
                .toLowerCase()
                .includes(searchResults.toLowerCase()) ||
              item.brand.toLowerCase().includes(searchResults.toLowerCase())
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
          ))}
      </div>
    </div>
  );
}
