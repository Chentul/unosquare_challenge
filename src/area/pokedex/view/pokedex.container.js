import { connect } from 'react-redux';
import { PokedexComp } from './pokedex.component';
import { sendQueryStringAction } from '../state/actions/send-query-string.action';
import { pokemonSelector } from '../state/pokedex.selectors';

function mapStateToProps(state) {
  return {
    pokemon: pokemonSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendQueryString: (queryString) => sendQueryStringAction(queryString, dispatch),
  }
}

const Pokedex = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokedexComp);

export default Pokedex;