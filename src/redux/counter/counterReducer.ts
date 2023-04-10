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
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
