import React from "react";
import ReactDOM from "react-dom";
import { useGlobalStore, GlobalStoreProvider } from './store'

const App = () => {
  const {count, increment, decrement, reset} = useGlobalStore();

  return(
  <div className="container">
    <div>Name: globalStoreApp</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    count: {count}
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>0</button>
  </div>
)};
ReactDOM.render(<GlobalStoreProvider><App /></GlobalStoreProvider>, document.getElementById("app"));
