import React, { useState } from 'react';

const Searchbar = () => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    const userValue = event.target.value;
    setInput(userValue);
    console.log(userValue);
  };

  const handleClick = (event) => {
    event.preventDefault();

    console.log('Input:', input);

    setInput('');
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Enter something'
        onChange={handleChange}
        value={input}
      />

      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Searchbar;
