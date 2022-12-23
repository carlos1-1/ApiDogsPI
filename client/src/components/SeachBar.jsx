import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../redux/actions";
import "../styles/searchBar.css";

export function SearchBar({ setInitialPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const handleButton = (event) => {
    event.preventDefault();
    dispatch(getDogsByName(name));
    setName("");
    setInitialPage(1);
  };
  return (
    <div className="container">
      <input
        className="input"
        type="text"
        placeholder="Search"
        autoComplete={"off"}
        value={name}
        onChange={(event) => handleInput(event)}
      />
      <button
        className="button-search"
        type="submit"
        onClick={(event) => handleButton(event)}
      >
        Search
      </button>
    </div>
  );
}
