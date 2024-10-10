export const recordsInitialState = {
  data: [],
};

export const recordsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_RECORDS_SUCCESS":
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};
