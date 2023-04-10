import React from "react";
import Count from "./Count";
import Button from "../Common/Button/Button";

interface Props {
  id: number;
  count: number;
  handleClick: (type: string, id: number) => void;
}

const Counter = ({ id, count, handleClick }: Props) => {
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
        <Button handleClick={() => handleClick("inc", id)}>Increment</Button>
        <Button handleClick={() => handleClick("dec", id)}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
