import React, { useState, useEffect, Fragment } from 'react';

function Searchbar() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    const userInput = event.target.value;
    setInput(userInput);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setQuery(input);
  };

  // When the query state changes ([query]), we then run the effect
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=Z60bAfNVYHWngrK2POOW9P9vHXqvPk3B&q=${query}&limit=25&offset=0&rating=g&lang=en`
        );
        const json = await response.json();
        console.log({ json });
        setResults(
          json.data.map((item) => {
            return item.images.preview.mp4;
          })
        );
      } catch (error) {}
    }

    if (query !== '') {
      fetchData();
    }
  }, [query]);

  return (
    <Fragment>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Enter something'
            onChange={handleChange}
            value={input}
          />

          <button type='submit'>Submit</button>
        </form>
        <br />
        {results.map((item) => (
          <video autoPlay loop key={item} src={item} />
        ))}
      </div>
    </Fragment>
  );
}

export default Searchbar;
