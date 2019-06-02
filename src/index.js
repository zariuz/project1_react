import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let posts = [
  { id: 1, message: "Hi Yo", likesCount: 15 },
  { id: 2, message: "Hello", likesCount: 25 },
  { id: 3, message: "Welcome", likesCount: 5 }
];

let dialogs = [
  { id: 1, name: "Evgeniy" },
  { id: 2, name: "Aleksey" },
  { id: 3, name: "Olya" },
  { id: 4, name: "Lena" },
  { id: 5, name: "Alecksandra" }
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hello" },
  { id: 3, message: "I'm fine" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" }
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
