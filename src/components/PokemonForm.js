import { Component } from 'react';


export default class PokemonForm extends Component { 
    state= {
        pokemonName: '',
    };


    handleNameChange = e => {
         this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
    }


    handelSubmit = e => {
       
         e.preventDefault();

       this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
    }





    render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          {/* <ImSearch  /> */}
          Найти
        </button>
      </form>
    );
  }

}