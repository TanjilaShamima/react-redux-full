import React from "react";
import Count from "./Count";
import Button from "../Common/Button/Button";
import { connect } from "react-redux";
import { DispatchType, StateType, actionType } from "../../redux/counter/actionTypes";
import { decrement, increment } from "../../redux/counter/actions";

interface Props {
  count: number;
  increment: (value: number) => actionType
  decrement: (value: number) => actionType
}

const Counter = ({ count, increment, decrement }: Props) => {
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
        <Button handleClick={() => increment(2)}>Increment</Button>
        <Button handleClick={() => decrement(1)}>Decrement</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    increment: (value: number) => dispatch(increment(value)),
    decrement: (value: number) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
