import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducers from "./reducers";

const saga = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(saga));

saga.run(sagas);

export default store;
