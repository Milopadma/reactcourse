import React from "react";
import ReactDOM from "react-dom/client";
//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//reducers
import reducers from "./reducers";
//thunk
import thunk from "redux-thunk";
//app
import App from "./App";
//store
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
