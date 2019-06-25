import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { PokePaper } from '../../../shared/components/pokepaper/pokepaper.component';

type Props = {
  pokemon: Object,
  sendQueryString: (queryString: string) => void,
};

export class PokedexComp extends Component<Props> {
  state = {
    queryString: '',
  };
  handleQueryString(value) {
    this.setState(({
      queryString: value
    }));
  }
  handleSendQueryString() {
    this.props.sendQueryString(this.state.queryString);
  }
  render() {
    const { pokemon } = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Search for a Pokemon"
            value={this.state.queryString}
            onChange={(event) => this.handleQueryString(event.target.value)}
          />
          <Button 
            fullWidth 
            color="primary"
            onClick={this.handleSendQueryString.bind(this)}
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={12}>
          {pokemon.length > 0 ? pokemon.map((poke, index) => {
            return (
              <PokePaper
                key={`${index}-${poke.name}`}
                id={poke.id}
                name={poke.name}
                sprite={poke.sprites.front_default}
              />
            );
          }) : 'No pokemon captured yet'}
        </Grid>
      </Grid>
    );
  }
}