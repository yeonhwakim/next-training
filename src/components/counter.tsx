"use client";

import { useState } from "react";

function Counter() {
  console.log("크라이언트");
  const [count, setCount] = useState(0);
  return (
    <>
      {count}
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        클릭!
      </button>
    </>
  );
}

export default Counter;
