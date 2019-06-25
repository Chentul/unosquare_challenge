const initialState = {
  pokemon: [],
};

export const pokedexReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SEND_QUERY_STRING':
      const { name, id } = action.payload;
      const payload = state.pokemon.find((pokemon) => pokemon.name === name && pokemon.id === id);
      if(!Boolean(payload)) {
        return {
          ...state,
          pokemon: [
            ...state.pokemon,
            action.payload
          ],
        };
      }
      return state;
    default:
      return state;
  }
}