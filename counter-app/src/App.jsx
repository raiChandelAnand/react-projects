import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onIncrement = (e) => setCount((prev) => prev + 1);
  const onDecrement = (e) => setCount((prev) => prev - 1);

  /* Below code will also work the same but it will fail
  to update count properly in situations when setCount 
  is called several times 
  const onIncrement = (e) => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    //Here the count value will not be 4, it will be 1 only after once execution of onIncrement
  };
  const onDecrement = (e) => setCount(count - 1);
  */

  return (
    <>
      <div className="gap-8 flex flex-col justify-center items-center h-screen">
        <p className="bg-blue-100 w-12 h-12 flex justify-center items-center rounded-lg">
          {count}
        </p>
        <div className="flex flex-row gap-4">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={onIncrement}
          >
            Increment Count
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={onDecrement}
          >
            Decrement Count
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
