import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import ConnectedCounter from "./Counter";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ConnectedCounter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
