/** @jsx h */
import { createElement as h, useState } from "https://esm.sh/react@18.2.0";
import "./App.css";
import image from "./logo.svg";
import { join } from "https://deno.land/std@0.152.0/path/posix.ts";

export function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      Hello, World!
      <img src={image} alt="" />
      {count}
      {join("a", "b", "c")}
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}
