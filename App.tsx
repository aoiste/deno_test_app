/** @jsx h */
import { createElement as h } from "https://esm.sh/react@18.2.0";
import "./App.css";
import image from "./logo.svg";

export function App() {
  return (
    <div className="app">
      Hello, World!
      <img src={image} alt="" />
    </div>
  );
}
