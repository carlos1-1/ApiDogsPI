import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  getTemperaments,
  filterByTemperament,
  filterByCreate,
  orderAlphabetically,
  sortByWeight,
} from "../redux/actions";
import Card from "./Card";
import Paginated from "./Paginated";
import Filters from "./filters";
import Load from "./loadin";
import "../styles/home.css";

export default function Home() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.allDogs);
  const [initialpage, setInitialPage] = useState(1); //pagina actual
  const [dogsPerPage] = useState(8);
  const lastDog = initialpage * dogsPerPage;
  const firstDog = lastDog - dogsPerPage;
  const currentDogs = dogs.slice(firstDog, lastDog);
  const [, setReload] = useState("");

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getDogs());
    setInitialPage(1);
  };

  const paginated = (pageNumber) => {
    setInitialPage(pageNumber);
  };

  const handleFilterTemperament = (event) => {
    event.preventDefault();
    setInitialPage(1);
    dispatch(filterByTemperament(event.target.value));
    setReload(event.target.value);
  };
  const handleFilterCreate = (event) => {
    event.preventDefault();
    setInitialPage(1);
    dispatch(filterByCreate(event.target.value));
    setReload(event.target.value);
  };
  const handleFilterAlphabetical = (event) => {
    event.preventDefault();
    setInitialPage(1);
    dispatch(orderAlphabetically(event.target.value));
    setReload(event.target.value);
  };
  const handleFilterWeight = (event) => {
    event.preventDefault();
    setInitialPage(1);
    dispatch(sortByWeight(event.target.value));
    setReload(event.target.value);
  };

  return (
    <>
      <div className="home">
        <div className="create">
          <Link to="/Create">
            <button className="button-home">Create my dog</button>
          </Link>
        </div>
        <div className="filters">
          <Filters
            handleFilterCreate={handleFilterCreate}
            handleFilterAlphabetical={handleFilterAlphabetical}
            handleFilterWeight={handleFilterWeight}
            handleFilterTemperament={handleFilterTemperament}
            handleClick={handleClick}
            setInitialPage={setInitialPage}
          />
        </div>
        <div className="card-container">
          {currentDogs.length > 0 ? (
            currentDogs.map((dog) => {
              return (
                <div key={dog.id} className="card">
                  {dog.image.url ? (
                    <Card
                      id={dog.id}
                      image={dog.image.url}
                      name={dog.name}
                      temperament={dog.temperament}
                      min_weight={dog.min_weight}
                      max_weight={dog.max_weight}
                      life_span={dog.life_span}
                      key={dog.id}
                    />
                  ) : (
                    <Card
                      id={dog.id}
                      image={dog.image}
                      name={dog.name}
                      temperament={dog.temperament}
                      min_weight={dog.min_weight}
                      max_weight={dog.max_weight}
                      life_span={dog.life_span}
                      key={dog.id}
                    />
                  )}
                </div>
              );
            })
          ) : (
            <Load />
          )}
        </div>
        <div className="paginated">
          <Paginated
            dogsPerPage={dogsPerPage}
            dogs={dogs.length}
            paginated={paginated}
            initialpage={initialpage}
          />
        </div>
      </div>
    </>
  );
}
