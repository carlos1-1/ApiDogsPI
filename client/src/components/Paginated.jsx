import React from "react";
import "../styles/paginated.css";

export default function Paginated({
  dogsPerPage,
  dogs,
  paginated,
  initialpage,
}) {
  let numbersPage = [];

  for (let i = 0; i < Math.ceil(dogs / dogsPerPage); i++) {
    numbersPage.push(i + 1);
  }

  return (
    <nav className="nav">
      <ul className="list">
        {initialpage > 1 && (
          <li className="element">
            <button
              onClick={() => paginated(initialpage - 1)}
              className="number"
            >
              Prev
            </button>
          </li>
        )}
        {numbersPage?.map((number) => {
          return (
            <li key={number} className="element">
              <button onClick={() => paginated(number)} className="number">
                {number}
              </button>
            </li>
          );
        })}

        {initialpage < dogs / dogsPerPage && (
          <li className="element">
            <button
              onClick={() => paginated(initialpage + 1)}
              className="number"
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
/*
  <div className="container">
      <ul className="pagination">
        {initialpage > 1 && (
          <button onClick={() => paginated(initialpage - 1)}>back</button>
        )}
        {numbersPage?.map((number) => {
          return (
            <li key={number}>
              <button className="btn-pagin" onClick={() => paginated(number)}>
                <strong>{number}</strong>
              </button>
            </li>
          );
        })}
        {initialpage < dogs / dogsPerPage && (
          <button onClick={() => paginated(initialpage + 1)}>next</button>
        )}
      </ul>
    </div>
*/
