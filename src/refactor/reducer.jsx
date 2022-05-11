import { ADD_LOGIN, ADD_REGISTER } from "./actiontype";
import { store } from "./store";

const init = {
  registerstore: [],
};

export const regreducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_REGISTER:
      return { ...state, registerstore: payload };

    default:
      return state;
  }
};

const initlog = {
  loginstore: [],
};
export const logreducer = (state = initlog, { type, payload }) => {
  switch (type) {
    case ADD_LOGIN:
      return { loginstore: [payload] };
    default:
       return state
    }
};
