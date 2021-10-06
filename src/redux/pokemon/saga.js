import { call, delay, put, takeLatest, all } from "redux-saga/effects";

import api from "../../services/pokeapi";

function getStatFromStats(name, stats) {
  const filtered = stats.filter((stat) => stat.stat.name === name && stat);

  const stat = filtered[0].base_stat;

  return stat;
}

function getNamesFromAbilities(abilities) {
  const names = abilities.map((item) => {
    return item.ability.name;
  });

  return names;
}

function* pokemon() {
  yield all([yield takeLatest("REQUEST_POKEMON", asyncGetPokemon)]);
}

function* asyncGetPokemon(action) {
  const id = action.payload.id;
  const route = `pokemon/${id}`;

  const apiCall = yield () => {
    return api
      .get(route)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };

  try {
    // call api
    const res = yield call(apiCall);

    // image
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master";
    const img = `${imageUrl}/sprites/pokemon/${id}.png`;

    // name
    const name = res.name;

    // stats
    const hp = yield getStatFromStats("hp", res.stats);
    const attack = yield getStatFromStats("attack", res.stats);
    const defense = yield getStatFromStats("defense", res.stats);
    const speed = yield getStatFromStats("speed", res.stats);

    const abilities = yield getNamesFromAbilities(res.abilities);

    // pokemon details
    const pokemon = {
      id,
      img,
      name,
      stats: {
        hp,
        attack,
        defense,
        speed,
      },
      abilities,
    };

    yield put({
      type: "SUCCESS_POKEMON",
      payload: {
        data: pokemon,
      },
    });
  } catch (e) {
    yield put({
      type: "FAILURE_POKEMON",
      payload: {
        error: "Falha ao conectar, tente mais tarde.",
      },
    });
  }
}

export default pokemon;
