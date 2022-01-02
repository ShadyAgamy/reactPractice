import { ADD_PROPERTY, ADD_FAVORITE } from "../actions/types";

const initialState = [];

export const allProperties = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PROPERTY:
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
          console.log("first");
          return item;
        }
        console.log("sec");
        return {
          ...item,
          favorite: !favStatus,
        };
      });

    default:
      return state;
  }
};

