import React, { FunctionComponent } from "react";

const SearchBar: FunctionComponent<{ handleChangeTerm: any }> = (props) => {
  return (
    <React.Fragment>
      <div className="field">
        <label>Enter Search Term</label>
      </div>
      <div className="input-group rounded mb-2">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={props.handleChangeTerm}
        />
        <span className="input-group-text border-0" id="search-addon">
          <i className="bi bi-search"></i>
        </span>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
