import React from "react";

function GenreFilter({ setGenre }) {
  return (
    <select className="filter" onChange={(e) => setGenre(e.target.value)}>
      <option value="All">All</option>

      <option value="Programming">Programming</option>
      <option value="Fiction">Fiction</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Self Help">Self Help</option>

      <option value="Education">Education</option>
      <option value="Science">Science</option>
      <option value="History">History</option>
      <option value="Biography">Biography</option>
      <option value="Technology">Technology</option>
    </select>
  );
}

export default GenreFilter;
