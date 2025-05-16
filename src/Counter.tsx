import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count - 1 >= 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">Count: {count}</h2>
      <div className="grid grid-cols-2 gap-4 max-w-[300px] mx-auto my-8">
        <button
          className="col-span-2 md:col-span-1 border border-gray-400 shadow-md rounded-md"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="col-span-2 md:col-span-1 border border-gray-400 shadow-md rounded-md"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}
