import React, { Component } from 'react';
import PokeList from '../../components/PokeList/PokeList';
import './ListContainer.css';

class ListContainer extends Component {

    state = {
        pokeData: []
    }

    componentDidMount() {
        const url = "https://pokeapi.co/api/v2/pokemon/"

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ pokeData: data.results });

            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        return (
            <div className="ListContainer">
                <PokeList pokeData={this.state.pokeData} />
            </div>
        );
    }
}

export default ListContainer;