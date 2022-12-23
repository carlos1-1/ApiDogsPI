import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getTemperaments, postDogs } from "../redux/actions";

import "../styles/create.css";

export default function Create() {
  const dispatch = useDispatch();
  const temperament = useSelector((state) => state.allTemperaments);
  const history = useHistory(); //redirecciona a la ruta especificada
  const [input, setInput] = useState({
    name: "",
    image: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    life_span_min: "",
    life_span_max: "",
    temperament: [],
  });
  let validate = () => {
    if (input.name.length <= 3 || input.name.length >= 50) {
      return alert("invalid name");
    }
    if (
      parseFloat(input.min_height) === 0 ||
      parseFloat(input.max_height) === 0 ||
      parseFloat(input.min_weight) === 0 ||
      parseFloat(input.max_weight) === 0 ||
      parseFloat(input.life_span_min) === 0 ||
      parseFloat(input.life_span_max) === 0
    ) {
      return alert("0 is not a valid value");
    }
    if (
      parseFloat(input.min_height) >= parseFloat(input.max_height) ||
      parseFloat(input.min_weight) >= parseFloat(input.max_weight) ||
      parseFloat(input.life_span_min) >= parseFloat(input.life_span_max)
    ) {
      return alert("min cannot be greater than max");
    }
    if (
      input.min_height.length >= 3 ||
      input.max_height.length >= 3 ||
      input.min_weight.length >= 3 ||
      input.max_weight.length >= 3 ||
      input.life_span_min.length >= 3 ||
      input.life_span_max.length >= 3
    ) {
      return alert("the number too big");
    } else return true;
  };

  const handleButton = (event) => {
    event.preventDefault();
    if (validate()) {
      dispatch(postDogs(input));
      alert("Add dog");
      setInput({
        name: "",
        image: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        life_span_min: "",
        life_span_max: "",
        temperament: [],
      });
      history.push("/home");
    }
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (event) => {
    setInput({
      ...input,
      temperament: [...input.temperament, event.target.value],
    });
  };

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);
  return (
    <div className="mainscreen">
      <div className="cardCreate">
        <div className="leftside">
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg"
            className="img"
            alt="dog"
          />
        </div>

        <div className="rightside">
          <form onSubmit={(event) => handleButton(event)} action="">
            <h1>Create your dog</h1>

            <p>Name</p>
            <input
              className="inputbox"
              type="text"
              value={input.name}
              name="name"
              onChange={(event) => handleChange(event)}
              required
            />
            <div className="container-short">
              <p>Min height:</p>
              <input
                className="inputbox-short"
                type="number"
                value={input.min_height}
                name="min_height"
                onChange={(event) => handleChange(event)}
                required
              />

              <p>Max height:</p>
              <input
                className="inputbox-short"
                type="number"
                value={input.max_height}
                name="max_height"
                onChange={(event) => handleChange(event)}
                required
              />
            </div>
            <div className="container-short">
              <p>Min weight:</p>
              <input
                className="inputbox-short"
                type="number"
                value={input.min_weight}
                name="min_weight"
                onChange={(event) => handleChange(event)}
                required
              />
              <p>Max height:</p>
              <input
                className="inputbox-short"
                type="number"
                value={input.max_weight}
                name="max_weight"
                onChange={(event) => handleChange(event)}
                required
              />
            </div>
            <div className="container-short">
              <p>Life span min:</p>
              <input
                className="inputbox-short"
                type="number"
                value={input.life_span_min}
                name="life_span_min"
                onChange={(event) => handleChange(event)}
                required
              />
              <p>Life span max:</p>
              <input
                className="inputbox-short"
                type="number"
                value={input.life_span_max}
                name="life_span_max"
                onChange={(event) => handleChange(event)}
                required
              />
            </div>

            <p>Image</p>
            <input
              className="inputbox"
              type="text"
              value={input.image}
              name="image"
              onChange={(event) => handleChange(event)}
            />
            <p>Temperaments</p>
            <select
              className="inputbox"
              onChange={(event) => handleSelect(event)}
            >
              <option key={0} value="All" hidden>
                Temperaments
              </option>
              {temperament.map((temperament) => {
                return (
                  <option value={temperament.name} key={temperament.id}>
                    {temperament.name}
                  </option>
                );
              })}
            </select>
            <ul>
              <li>{input.temperament.map((temp) => temp + ", ")}</li>
            </ul>
            <p></p>
            <div className="container-btn">
              <Link to="/Home">
                <button className="button">Back</button>
              </Link>
              <button type="submit" className="button">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
