import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ResultsContext } from './store/ResultsContext';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages

import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import SearchResultsPage from './pages/searchResults/SearchResultsPage';

import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchResults, setSearchResults] = useState('');
  const [slider1Items, setSlider1Items] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {
    setSearchResults(query);
    setQuery('');
  };

  // When the query state changes ([query]), we then run the effect
  useEffect(() => {
    fetch(`http://localhost:4000/tools`)
      .then((res) => {
        return res.json();
      })
      .then((data) => [setResults(data), setSlider1Items(data)])
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className='App'>
        <ResultsContext.Provider
          value={{
            query,
            setQuery,
            results,
            setResults,
            handleChange,
            handleSubmit,
            searchResults,
            setSearchResults,
            slider1Items,
          }}
        >
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/Cart' element={<Cart />}></Route>
              <Route path='/Contact' element={<Contact />}></Route>
              <Route
                path='/SearchResultsPage/:searchItem'
                element={<SearchResultsPage />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </ResultsContext.Provider>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default App;
