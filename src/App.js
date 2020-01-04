import React, { Component } from 'react';
import AppBar from './components/AppBar/AppBar';
import ListContainer from './containers/ListContainer/ListContainer';

class App extends Component {

  state = {
   
  };
  render() {

    return (
      <>
        <AppBar />
        <ListContainer />
      </>
    );
  }
}

export default App;
