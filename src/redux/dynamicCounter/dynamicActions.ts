import { D_DECREMENT, D_INCREMENT } from "./dynamicActionTypes";


export const d_increment = (value: number) => {
  return {
    type: D_INCREMENT,
    payload: {
      value: value
    },
  };
};

export const d_decrement = (value: number) => {
  return {
    type: D_DECREMENT,
    payload: {
      value: value
    },
  };
};
