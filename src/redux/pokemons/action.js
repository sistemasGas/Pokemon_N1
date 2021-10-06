export const getPokemons = (data) => ({
  type: "REQUEST_POKEMONS",
  payload: data,
});

export const resetPokemons = (data) => ({
  type: "RESET_POKEMONS",
  payload: data,
});
