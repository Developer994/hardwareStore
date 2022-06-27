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
        const response = await fetch(`http://localhost:4000/tools/?q=${query}`);
        const json = await response.json();
        console.log({ json });
        setResults(
          json.map((item) => {
            return item.toolName;
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
        {results
          .filter((item) => {
            if (query === '') {
              return item;
            } else if (item.toLowerCase().includes(query.toLowerCase())) {
              return item;
            }
          })
          .map((item, id) => (
            <h3 key={id}>{item}</h3>
          ))}
      </div>
    </Fragment>
  );
}

export default Searchbar;
