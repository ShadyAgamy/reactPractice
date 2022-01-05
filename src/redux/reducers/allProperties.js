import {
  ADD_PROPERTY,
  ADD_FAVORITE,
} from "../actions/types";

const initialState = [];

const allProperties = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PROPERTY:
      console.log(payload);
      return [
        ...state,
        {
          ...payload,
          id: state.length !== 0 ? state[state.length - 1].id + 1 : 0,
        },
      ];

    case ADD_FAVORITE:
      const id = payload;
      const favStatus = state[id].favorite ? true : false;
      return state.map((item, index) => {
        if (parseInt(index) !== parseInt(id)) {
          return item;
        }
        return {
          ...item,
          favorite: !favStatus,
        };
      });

    default:
      return state;
  }
};

export default allProperties;