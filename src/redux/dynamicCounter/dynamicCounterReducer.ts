import { D_DECREMENT, D_INCREMENT, StateType, actionType } from "./dynamicActionTypes";


const initialState = {
  value: 0,
};

const dynamicCounterReducer = (
  state: StateType = initialState,
  action: actionType
) => {
  switch (action.type) {
    case D_INCREMENT:
      return {
        ...state,
        value: state.value + action.payload.value,
      };
    case D_DECREMENT:
      return {
        ...state,
        value: state.value - action.payload.value,
      };

    default:
      return state;
  }
};

export default dynamicCounterReducer;
