import './SearchBar.css';

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
