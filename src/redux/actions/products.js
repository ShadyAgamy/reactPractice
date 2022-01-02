
import {  ADD_PROPERTY,ADD_FAVORITE} from "./types";

// ADD PROPERT 
export const addProperty = (property) => (dispatch) => {
  dispatch({
    type: ADD_PROPERTY,
    payload: property,
  });

};

export const addToFav = (id) => (dispatch) => {
  dispatch({
    type: ADD_FAVORITE,
    payload: id,
  });

};






