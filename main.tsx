/** @jsx h */
import { createElement as h } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import { App } from "./App.tsx";

const div = document.createElement("div");

document.body.appendChild(div);

createRoot(div).render(<App />);
