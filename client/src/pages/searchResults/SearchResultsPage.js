import React, { useContext, useEffect } from 'react';
import './SearchResultsPage.css';
import { useParams } from 'react-router-dom';
import { ResultsContext } from '../../context/ResultsContext';
import Searchbar from '../../components/Searchbar/Searchbar';

// Styles
import './SearchResultsPage.css';

export default function SearchResultsPage() {
  const { searchResults, results, setSearchResults } =
    useContext(ResultsContext);
  const { searchItem } = useParams();

  useEffect(() => {
    setSearchResults(searchItem);
  }, []);

  const filteredResults = () => {
    let currentResults = results
      .filter((item) => {
        if (searchResults === '') {
          return searchResults; // change to item to display all items
        } else if (
          item.itemName.toLowerCase().includes(searchResults.toLowerCase()) ||
          item.brand.toLowerCase().includes(searchResults.toLowerCase())
        ) {
          return item;
        }
      })
      .map((item, id) => (
        <div key={id}>
          <h1>{item.itemName}</h1>
          <h3>{item.brand}</h3>
          <img className='searchedItemImg' src={item.image} alt='' />
          <h5>{item.price}</h5>
          <button>add to cart</button>
        </div>
      ));

    if (currentResults.length > 0) {
      return currentResults;
    } else {
      return <div>No Results</div>;
    }
  };

  return (
    <div className='searchResultsContainer'>
      <Searchbar />
      <div className={`searchResultsPg`}>{filteredResults()}</div>
    </div>
  );
}
