const Searchbar = () => {
  const getInputValue = (event) => {
    const userValue = event.target.value;

    console.log(userValue);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Enter something'
        onChange={getInputValue}
      />
    </div>
  );
};

export default Searchbar;
