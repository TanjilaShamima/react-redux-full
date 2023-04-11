export const D_INCREMENT = "dynamicCounter/increment";
export const D_DECREMENT = "dynamicCounter/decrement";

export type StateType = {
  value: number;
};

export type actionType = {
  type: string;
  payload: {
    value: number;
  }
};

export type rootReducerType = {
  counter: StateType,
  dynamicCounter: StateType
}

export type DispatchType = (args: actionType) => actionType
