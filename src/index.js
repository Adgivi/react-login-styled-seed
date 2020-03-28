import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import { store, persistor } from "./redux/store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading="Loading...">
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
