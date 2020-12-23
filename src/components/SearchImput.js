import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../style/search.css';

function SearchInput() {
  const { getFilterName } = useContext(StarWarsContext);

  return (
    <div>
      <div className="title">
        <h1>StarWars DataTable</h1>
      </div>
      <div className="input-name-div">
        <label className="labelName" htmlFor="name-filter">
          Search by name:
        <input
            className="inputName"
            name="name-filter"
            data-testid="name-filter"
            type="text"
            onChange={({ target }) => getFilterName(target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default SearchInput;
