import React from "react";

interface Props {
  count: number;
}

const Count = ({ count }: Props) => {
  return <h1>{count}</h1>;
};

export default Count;
