const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="Filter-bar">
      <button
        className={filter === "ALL" ? "active" : ""}
        onClick={() => setFilter("ALL")}
      >
        All
      </button>

      <button
        className={filter === "REMOTE" ? "active" : ""}
        onClick={() => setFilter("REMOTE")}
      >
        Remote
      </button>

      <button
        className={filter === "ONSITE" ? "active" : ""}
        onClick={() => setFilter("ONSITE")}
      >
        Onsite
      </button>
    </div>
  );
};

export default FilterBar;
