import { call, delay, put, takeLatest, all } from "redux-saga/effects";

import api from "../../services/pokeapi";

function getIdFromUrl(url) {
  const toCut = "https://pokeapi.co/api/v2/pokemon/";
  const id = url.split(toCut)[1].split("/")[0];

  return id;
}

function* pokemons() {
  yield all([yield takeLatest("REQUEST_POKEMONS", asyncGetPokemons)]);
}

function* asyncGetPokemons(action) {
  yield delay(500);

  const offset = action.payload.offset;
  const route = `pokemon?offset=${offset}&limit=10`;

  const apiCall = yield () => {
    return api
      .get(route)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };

  try {
    const res = yield call(apiCall);
    const data = res.results;

    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master";

    const dataWithIdsAndImages = yield data.map((pokemon) => {
      const id = getIdFromUrl(pokemon.url);
      const img = `${imageUrl}/sprites/pokemon/${id}.png`;

      return {
        id,
        img,
        name: pokemon.name,
      };
    });

    yield put({
      type: "SUCCESS_POKEMONS",
      payload: {
        offset,
        data: dataWithIdsAndImages,
      },
    });
  } catch (e) {
    yield put({
      type: "FAILURE_POKEMONS",
      payload: {
        error: "Falha ao conectar, tente mais tarde.",
      },
    });
  }
}

export default pokemons;
