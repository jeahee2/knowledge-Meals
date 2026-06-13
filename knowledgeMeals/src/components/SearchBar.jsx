function SearchBar({ search, setSearch }) {
  return (
    <section className="search-section">
      <h2>🔍 지식 검색</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="과목, 제목, 태그를 검색해보세요"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </section>
  );
}

export default SearchBar;