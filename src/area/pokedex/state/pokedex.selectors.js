import { createSelector } from 'reselect'

const pokedexStateSlice = (state) => state;

export const pokemonSelector = createSelector(
  pokedexStateSlice,
  (state) => state.pokemon && state.pokemon
);