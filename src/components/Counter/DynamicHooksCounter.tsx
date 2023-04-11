import Count from "./Count";
import Button from "../Common/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { d_decrement, d_increment } from "../../redux/dynamicCounter/dynamicActions";
import { rootReducerType } from "../../redux/dynamicCounter/dynamicActionTypes";


const DynamicHooksCounter = () => {
  const count = useSelector((state: rootReducerType) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const incrementValue = () => {
    dispatch(d_increment(5));
  };

  const decrementValue = () => {
    dispatch(d_decrement(5));
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


export default DynamicHooksCounter;