/** @jsx h */
import { createElement as h, useState } from "https://esm.sh/react@18.2.0";
import "./App.css";
import image from "./logo.svg";
import { useRedacState } from "https://deno.land/x/redac@0.1.0-alpha.3/react.ts";

export function App() {
  const count = useRedacState(0);
  return (
    <div className="app">
      Hello, World!
      <img src={image} alt="" />
      {count.current}
      <button onClick={() => count.current--}>-1</button>
      <button onClick={() => count.current++}>+1</button>
    </div>
  );
}
