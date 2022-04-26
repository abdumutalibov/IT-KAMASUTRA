import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./components/redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import StoreContext, { Provider } from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );


