import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { clearDetails, getDetail } from "../redux/actions";
import "../styles/detail.css";
import { deleteDog } from "../redux/actions";
import Load from "./loadin";

export function DetailsFromDog(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    return () => dispatch(clearDetails());
  }, [dispatch, props.match.params.id]);

  const handleClickDelete = (event) => {
    event.preventDefault();
    dispatch(deleteDog(detail.id));
    history.push("/home");
  };

  const myDog = useSelector((state) => state.detail);
  const detail = myDog[0];
  return (
    <div className="father">
      {detail ? (
        <div className="cont">
          {detail.id.length > 3 ? (
            <button onClick={handleClickDelete} className="btn-delete">
              Delete
            </button>
          ) : (
            ""
          )}
          <div className="profile-container">
            <Link to="/home">
              {detail.image.url ? (
                <img
                  src={detail.image.url}
                  alt={`dog-${detail.name}`}
                  className="profile"
                />
              ) : (
                <img
                  src={detail.image}
                  alt={`dog-${detail.name}`}
                  className="profile"
                />
              )}
            </Link>
          </div>

          <div className="info">
            <h3>{detail.name}</h3>
            {detail.min_height === detail.max_height ? (
              <h5>Height: {detail.min_height} cm</h5>
            ) : (
              <div>
                <h5>Min Height: {detail.min_height} cm</h5>
                <h5>Max Height: {detail.max_height} cm</h5>
              </div>
            )}

            <h5>Min Weight: {detail.min_weight} kg</h5>
            <h5>Max Weight: {detail.max_weight} kg</h5>
            {detail.life_span_min === detail.life_span_max ? (
              <h5>Life span : {detail.life_span_min} years </h5>
            ) : (
              <div>
                <h5>Min life span : {detail.life_span_min} years </h5>
                <h5>Max life span : {detail.life_span_max} years </h5>
              </div>
            )}

            <h5>Temperaments: {detail.temperament}</h5>
          </div>
        </div>
      ) : (
        <Load />
      )}
    </div>
  );
}
