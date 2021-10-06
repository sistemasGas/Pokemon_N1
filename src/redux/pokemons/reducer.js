const INITIAL_STATE = {
  loading: false,
  error: "",
  offset: 0,
  data: [],
};

const pokemons = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // pokemons list
    case "RESET_POKEMONS":
      return INITIAL_STATE;

    case "REQUEST_POKEMONS":
      return { ...state, loading: true, error: "" };

    case "SUCCESS_POKEMONS":
      return {
        ...state,
        loading: false,
        error: "",
        offset: action.payload.offset,
        data: [...state.data, ...action.payload.data],
      };

    case "FAILURE_POKEMONS":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default pokemons;
