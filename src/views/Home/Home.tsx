import { useState } from "react";

const Home = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>Hello</h1>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum((prev) => prev + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Home;
