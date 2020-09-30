import React from 'react';
import './App.css';
import MyLibrary from './Components/MyLibrary/MyLibrary'
import { Route, Switch } from 'react-router-dom'
import PlaylistsContainer from './Components/playlist_index/PlaylistsContainer';
import Navbar from './Components/Navbar/Navbar'
import VideoShow from './Components/video_show/VideoShow'

class App extends React.Component {

  state ={
    userObj: [],
    passedObj: []
  }

  componentDidMount(){                                     
    fetch("http://localhost:3000/users/1/")                
    .then(resp => resp.json())                             
    .then(userObj => this.setState({userObj: userObj})) 
  }

  clickHandler = (props) => {
    console.log("Hello", props)
    this.setState({ passedObj: props})
  }

  render(){
      return (
        <>
        <Navbar />
        <Switch>
          <Route path="/my_playlists" render={() => 
              <PlaylistsContainer 
                  userObj={this.state.userObj} 
                  clickHandler={this.clickHandler}/>} /> 

          <Route exact path="/playlists/video_show" render={() => 
              <VideoShow userObj={this.state.userObj} videoShowPage={this.state.passedObj}
                  />} /> 



          <Route exact path="/my_library" render={() => <MyLibrary userObj={this.state.userObj} />} />
        </Switch>

        </>

      );
    }
  }

export default App;
