import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import { PersistGate } from "redux-persist/integration/react";
import persistor from "./persistor";

const redux = (props) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {props.children}
    </PersistGate>
  </Provider>
);

export default redux;
