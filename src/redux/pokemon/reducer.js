const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: "",
  data: {},
};

const pokemon = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REQUEST_POKEMON":
      return { ...INITIAL_STATE, loading: true };
    case "SUCCESS_POKEMON":
      return { ...INITIAL_STATE, data: action.payload.data, loaded: true };
    case "FAILURE_POKEMON":
      return { ...INITIAL_STATE, error: action.payload.data };
    default:
      return state;
  }
};

export default pokemon;
