import { DECREMENT, INCREMENT, StateType, actionType } from "./actionTypes";

const initialState = {
  value: 0,
};

const counterReducer = (
  state: StateType = initialState,
  action: actionType
) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload.value,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload.value,
      };

    default:
      return state;
  }
};

export default counterReducer;
