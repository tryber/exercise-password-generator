import React from "react";
import { Provider } from "react-redux";
import GeneratorHome from "./components/GeneratorHome";
import store from "./redux/store";

function App() {
  return (
    <Provider store={ store }>
      <GeneratorHome />
    </Provider>
  );
}

export default App;
