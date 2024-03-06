import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CountStoreProvider from "./store/CountStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CountStoreProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CountStoreProvider>
);
