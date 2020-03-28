import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import reducerRoot from "./reducer.root";
import sagaRoot from "./saga.root";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(
  reducerRoot,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagaRoot);

export const persistor = persistStore(store);

export default { store, persistor };
