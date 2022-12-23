const initialState = {
  allDogs: [],
  allTemperaments: [],
  copyDogs: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        allDogs: action.payload,
        copyDogs: action.payload,
      };
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        allTemperaments: action.payload,
      };
    case "DELETE_DOG":
      return { ...state };

    case "SEARCH_NAME":
      return {
        ...state,
        allDogs: action.payload,
      };

    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "POST_DOG":
      return {
        ...state,
      };
    case "CLEAR_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };

    case "FILTER_BY_TEMPERAMENT":
      const temperamentDogs = state.copyDogs.filter((dog) =>
        dog.temperament?.includes(action.payload)
      );
      return {
        ...state,
        allDogs: temperamentDogs,
      };
    case "FILTER_BY_CREATE":
      const save = state.copyDogs;
      const filterCreate =
        action.payload === "DB"
          ? save.filter((dog) => dog.id.length > 10)
          : save.filter((dog) => dog.id < 1000);

      return {
        ...state,
        allDogs: action.payload === "All" ? save : filterCreate,
      };

    case "FILTER_A-Z":
      return {
        ...state,
        allDogs: action.payload,
      };
    /* const alphabetical =
        action.payload === "A-Z"
          ? state.allDogs.sort((first, second) => {
              if (first.name > second.name) {
                return 1;
              }
              if (second.name > first.name) {
                return -1;
              }
              return 0;
            })
          : state.allDogs.sort((first, second) => {
              if (first.name > second.name) {
                return -1;
              }
              if (second.name > first.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allDogs: alphabetical,
      };*/

    case "FILTER_BY_WEIGHT":
      const sortedArr =
        action.payload === "Min"
          ? state.allDogs.sort((a, b) => {
              if (isNaN(a.min_weight) || isNaN(b.min_weight)) {
                return -1;
              }
              if (parseInt(a.min_weight) > parseInt(b.min_weight)) {
                return 1;
              }
              if (parseInt(a.min_weight) < parseInt(b.min_weight)) {
                return -1;
              }
              return 0;
            })
          : state.allDogs.sort((a, b) => {
              if (isNaN(a.max_weight) || isNaN(b.max_weight)) {
                return -1;
              }
              if (parseInt(a.max_weight) > parseInt(b.max_weight)) {
                return -1;
              }
              if (parseInt(a.max_weight) < parseInt(b.max_weight)) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allDogs: sortedArr,
      };

    default:
      return {
        ...state,
      };
  }
}

export { rootReducer };
