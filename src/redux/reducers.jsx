/* eslint-disable no-case-declarations */
import { combineReducers } from "redux";

const listing = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
    case "REMOVE_LISTING":
      const newState = [...state];
      newState.splice(action.value, 1);
      return newState;
    default:
      return state;
  }
};

export default combineReducers({ listing });
