import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import { Route, Switch } from 'react-router-dom'
import PlaylistsContainer from './Components/playlist_index/PlaylistsContainer';

class App extends React.Component {

  state ={
    playlistArray: []
  }

  componentDidMount(){                                     
    fetch("http://localhost:3000/playlists")                
    .then(resp => resp.json())                             
    .then(playlists => this.setState({playlistArray: playlists})) 
  }

  render(){
    console.log("inside app", this.state.playlistArray)
      return (
        <>
        {/* add nav bar here */}
        <Switch>
          <Route exact path="/home" render={() => <Home />} /> 
          <Route path="/playlists" render={() => <PlaylistsContainer playlists={this.state.playlistArray} />} /> 
        </Switch>

        </>

      );
    }
  }

export default App;
