import React from "react";
import "./App.css";
import TotalCount from "./components/TotalCount/TotalCount";
import HooksCounter from "./components/Counter/HooksCounter";
import DynamicHooksCounter from "./components/Counter/DynamicHooksCounter";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
  {
    id: 3,
    count: 0,
  },
];

function App() {
  const [state] =
    React.useState<{ id: number; count: number }[]>(initialState);

  // const handleClick = (type: string, id: number) => {
  //   let updateState;
  //   if (type === "inc") {
  //     updateState = state.map((counter) => {
  //       if (counter.id === id) {
  //         return {
  //           ...counter,
  //           count: counter.count + 1,
  //         };
  //       } else {
  //         return {
  //           ...counter,
  //         };
  //       }
  //     });
  //   } else {
  //     updateState = state.map((counter) => {
  //       if (counter.id === id) {
  //         return {
  //           ...counter,
  //           count: counter.count - 1,
  //         };
  //       } else {
  //         return {
  //           ...counter,
  //         };
  //       }
  //     });
  //   }
  //   setState(updateState);
  // };

  const totalCount = () => {
    return state.reduce((totalCount, counter) => totalCount + counter.count, 0);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
        {/* {state.map((counter) => {
          return (
            <div key={counter.id}>
              <Counter />
            </div>
          );
        })} */}

        <HooksCounter />
        <DynamicHooksCounter />

        <div>
          <TotalCount count={totalCount()} />
        </div>
      </div>
    </div>
  );
}

export default App;
