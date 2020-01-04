import React from 'react';
import Card from '../Card/Card'
import './PokeList.css';

const PokeList = (props) => {


    return (
        <>
            <h2 className="PokeList_title">Lista de Pokemones</h2>
            <ul className="PokeList_content">
                {
                    props.pokeData.map((pokemon, index) => {
                        return (
                                <Card name={pokemon.name} data={pokemon} />
                        );
                    })
                }
            </ul>
        </>
    )

}

export default PokeList;