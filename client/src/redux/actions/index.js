import axios from "axios";
//conectando al back
//get dogs (all / xname / xid)
//get temperaments
//post dog
//filter
//order
export function getDogs() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/dogs");

    return dispatch({
      type: "GET_DOGS",
      payload: json.data,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/dogs/" + id);

    return dispatch({
      type: "GET_DETAIL",
      payload: json.data,
    });
  };
}

export function clearDetails() {
  return {
    type: "CLEAR_DETAIL",
    payload: {},
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/temperaments");

    return dispatch({
      type: "GET_TEMPERAMENTS",
      payload: json.data,
    });
  };
}
export function postDogs(payload) {
  return async function (dispatch) {
    const post = await axios.post("http://localhost:3001/create", payload);

    return post;
  };
}

export function getDogsByName(dogName) {
  return async function (dispatch) {
    let json = await axios.get(" http://localhost:3001/dogs?name=" + dogName);

    return dispatch({
      type: "SEARCH_NAME",
      payload: json.data,
    });
  };
}
export function deleteDog(payload) {
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/deleted/${payload}`);
    return dispatch({
      type: "DELETE_DOG",
    });
  };
}

export function filterByTemperament(payload) {
  return {
    type: "FILTER_BY_TEMPERAMENT",
    payload,
  };
}
export function filterByCreate(payload) {
  return {
    type: "FILTER_BY_CREATE",
    payload,
  };
}

export function orderAlphabetically(payload) {
  return async function (dispatch) {
    let json = await axios.get(" http://localhost:3001/AZ?order=" + payload);
    return dispatch({
      type: "FILTER_A-Z",
      payload: json.data,
    });
  };
}
/*
export function orderAlphabetically(payload) {
  return {
    type: "FILTER_A-Z",
    payload,
  };
}*/

export function sortByWeight(payload) {
  return {
    type: "FILTER_BY_WEIGHT",
    payload,
  };
}
