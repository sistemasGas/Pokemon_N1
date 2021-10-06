import { AsyncStorage } from "react-native";

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import pokemons from "../pokemons/reducer";
import pokemon from "../pokemon/reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducers = combineReducers({
  pokemons,
  pokemon,
});

const persistedReducers = persistReducer(persistConfig, reducers);

export default persistedReducers;
