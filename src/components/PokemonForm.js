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
      

      if (this.state.pokemonName.trim() === '') {
        alert('введіть назву')
        return;
      }

       this.props.onSubmit(this.state.pokemonName);
        this.setState({ pokemonName: '' });
    }





    render() {
    return (
      <form onSubmit={this.handelSubmit} >
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