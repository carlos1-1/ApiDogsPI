import React from "react";
import { useSelector } from "react-redux";
import { SearchBar } from "./SeachBar";
import "../styles/filter.css";
const Filters = ({
  handleFilterCreate,
  handleFilterAlphabetical,
  handleFilterWeight,
  handleFilterTemperament,
  handleClick,
  setInitialPage,
}) => {
  const temperaments = useSelector((state) => state.allTemperaments);

  return (
    <>
      <form className="form">
        <div className="div">
          <select
            name="Order alphabetically"
            onChange={(event) => handleFilterAlphabetical(event)}
            className="select"
          >
            <option hidden>Order alphabetically</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
        <div className="div">
          <select
            onChange={(event) => handleFilterWeight(event)}
            className="select"
          >
            <option hidden>Sort by weight</option>
            <option value="Min">Min weight</option>
            <option value="Max">Max weight</option>
          </select>
        </div>
        <div className="div">
          <select
            name="tempFilt"
            onChange={(event) => handleFilterTemperament(event)}
            className="select"
          >
            <option key={0} value="All" hidden>
              All temperaments
            </option>
            {temperaments.length > 0 &&
              temperaments.map((temp) => (
                <option value={temp.name} key={temp.id}>
                  {temp.name}
                </option>
              ))}
          </select>
        </div>
        <div className="div">
          <select
            onChange={(event) => handleFilterCreate(event)}
            className="select"
          >
            <option value="All">All Dogs</option>
            <option value="API">API</option>
            <option value="DB">Database</option>
          </select>
        </div>
        <SearchBar setInitialPage={setInitialPage} />
        <div className="box">
          <button className="reset" onClick={(event) => handleClick(event)}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default Filters;
