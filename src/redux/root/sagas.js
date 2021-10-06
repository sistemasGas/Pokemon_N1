import { all } from "redux-saga/effects";

import pokemons from "../pokemons/saga";
import pokemon from "../pokemon/saga";

function* sagas() {
  yield all([pokemons(), pokemon()]);
}

export default sagas;
