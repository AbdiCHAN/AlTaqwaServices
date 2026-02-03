import "./SearchBar.css";

export default function SearchBar() {
  return (
    <label className="search-wrapper">
      <div className="search-box">
        <div className="search-icon">
          <span className="material-symbols-outlined">search</span>
        </div>
        <input
          type="text"
          placeholder="Search destinations..."
          className="search-input"
        />
      </div>
    </label>
  );
}
