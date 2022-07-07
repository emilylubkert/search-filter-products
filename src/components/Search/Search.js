import './Search.css';
function Search({ onSubmit, handleChange, searchInput }) {
  return (
    <>
      <h2>Enter search term to filter by name or description</h2>
      <form onSubmit={onSubmit}>
        <input
          className='input'
          type='text'
          value={searchInput}
          placeholder='Search...'
          onChange={handleChange}
          required
        />
        <input className='submit' type='submit' value='submit' />
      </form>
    </>
  );
}

export default Search;
