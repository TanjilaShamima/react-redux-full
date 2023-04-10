export const INCREMENT = "counter/increment";
export const DECREMENT = "counter/decrement";

export type StateType = {
  value: number;
};

export type actionType = {
  type: string;
  payload: number;
};
