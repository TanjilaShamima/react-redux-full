import Count from "./Count";
import Button from "../Common/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/counter/actions";
import { rootReducerType } from "../../redux/dynamicCounter/dynamicActionTypes";


const HooksCounter = () => {
  const count = useSelector((state: rootReducerType) => state.counter.value);
  const dispatch = useDispatch();

  const incrementValue = () => {
    dispatch(increment(5));
  };

  const decrementValue = () => {
    dispatch(decrement(5));
  };

  return (
    <div
      style={{
        width: "30%",
        backgroundColor: "gray",
        margin: "20px auto",
        padding: "30px",
      }}
    >
      <Count count={count} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button handleClick={() => incrementValue()}>Increment</Button>
        <Button handleClick={() => decrementValue()}>Decrement</Button>
      </div>
    </div>
  );
};

// const mapStateToProps = (state: StateType) => {
//   return {
//     count: state.value,
//   };
// };

// const mapDispatchToProps = (dispatch: DispatchType) => {
//   return {
//     increment: (value: number) => dispatch(increment(value)),
//     decrement: (value: number) => dispatch(decrement(value)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HooksCounter);
export default HooksCounter;
