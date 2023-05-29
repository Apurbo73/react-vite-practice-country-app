import React from "react";

const Search = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search here"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
