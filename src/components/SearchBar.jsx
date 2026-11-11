function SearchBar({ search, setSearch }) {
  return (
    <input
      placeholder="Search Projects"
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;