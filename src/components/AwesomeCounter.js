import { useState } from "react";

const AwesomeCounter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue ?? 0);

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h1> Awesome Counter</h1>
      <span>{count}</span>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default AwesomeCounter;
