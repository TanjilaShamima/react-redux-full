import React from "react";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
  handleClick: () => void;
}

const Button = ({ children, handleClick }: Props) => {
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
