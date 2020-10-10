import React from "react";

const WithHOC = (WrappedComponent, startCount) => {
  const NewComponent = () => {
    const [counter, setCounter] = React.useState(startCount);

    const incrementHandle = () => {
      setCounter((c) => c + startCount);
    };
    return (
      <WrappedComponent
        counter={counter}
        incrementHandle={incrementHandle}
        name={"ihsan"}
      />
    );
  };

  return NewComponent;
};
export default WithHOC;
