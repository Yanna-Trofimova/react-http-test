import { Component } from 'react';
import PokemonDataView from './PokemonDataView';


export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        status: 'idle',
        error: null,
    }


    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;

        if (prevName !== nextName) {
            this.setState({status: 'pending'})

            this.setState({ loading: true,  pokemon: null });
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
                .then(res => res.json())
                .then(pokemon => this.setState({ pokemon, status:'resolved'  }))
                .catch(error => this.setState({error,status:'rejected' }))
               
        }
    }



    render() {
        const { pokemon, status } = this.state


        if (status === 'pending') {
            return (
                 <h1>LOADING...</h1>
            )
        } 
        
        if (status === 'rejected') {
            return (
                 <h1>pokemona netu</h1>
            )
        } 



        if (status === 'resolved') {
            return <PokemonDataView pokemon={pokemon}/>
               

            
            
        }
    }
 }