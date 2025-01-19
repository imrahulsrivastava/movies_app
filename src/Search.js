import React, { useContext } from "react";
import { appContext } from "./context";

const Search = () => {
  const { searchQuery, setSearchQuery, showError } = useContext(appContext);
  return (
    <>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <div className="card-error">
        <p>
          {showError.show && showError.msg === "Incorrect IMDb ID."
            ? (showError.msg = "")
            : showError.msg}
        </p>
      </div>
    </>
  );
};

export default Search;
