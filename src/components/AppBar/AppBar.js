import React ,{Component} from 'react';
import './AppBar.css';
import logo from '../../assets/pokelogo.png';

class AppBar extends Component {


    render () {
        
        return (
            <div className="AppBar" alt="LogocleaPokemon">
                <img src={logo} />
                <h3>Poke App</h3>
            </div> 
        );
    }
}

export default AppBar;