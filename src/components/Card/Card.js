import React from 'react';
import './Card.css';

const Card = (props) => {



    let index = props.data.url.split("/")[6];
    console.log(props.data);
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + index + ".png";

    return (
        <li className="Card">
            <div className="card_img">


                <img src={url} alt="pokemon-" />
            </div>
            <h4>{props.name}</h4>

        </li>
    );
}

export default Card;