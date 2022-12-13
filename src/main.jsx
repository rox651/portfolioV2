import * as React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/";
import "./languages/i18n";
import { AppContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
);
