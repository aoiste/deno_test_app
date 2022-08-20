/** @jsx h */
import { createElement as h, useState } from "https://esm.sh/react@18.2.0";
import "./App.css";
import image from "./logo.svg";

export function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      Hello, World!
      <img src={image} alt="" />
      {count}
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}
