import React from 'react';
import './App.css';
import MyLibrary from './Components/MyLibrary/MyLibrary'
import { Route, Switch } from 'react-router-dom'
import PlaylistsContainer from './Components/playlist_index/PlaylistsContainer';
import PlaylistCard from './Components/playlist_index/PlaylistCard'
import Navbar from './Components/Navbar/Navbar'
import NewVideo from './Components/add_new/NewVideo'
import NewPlaylist from './Components/add_new/NewPlaylist'
import PlaylistShow from './Components/playlist_index/PlaylistShow'
import VideoShow from './Components/video_show/VideoShow'
import VideoNoteForm from './Components/video_show/VideoNoteForm-in-progress';
import Login from './Components/login/login'

class App extends React.Component {

  state ={
    userObj: null,
    playlistID: null,
    user: null,
    playlists: null,
    notes: null,
    videos: null
  }

  componentDidMount(){                                     
    fetch("http://localhost:3000/users/1/")                
    .then(resp => resp.json())                             
    .then(userObj => this.setState({
      userObj: userObj,
      user: userObj.user,
      playlists: userObj.playlists,
      notes: userObj.notes,
      videos: userObj.videos

    })) 
  }

  VsubmitHandler = (name, url, id) => {
    // console.log("We are in the submitHandler of App.js: ", Vi)
    const obj = {name: name, url: url, playlist_id: id}
    // debugger
    const options = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
    body: JSON.stringify(obj)
    }

    fetch("http://localhost:3000/videos/", options)
    .then(resp => resp.json())
    .then(data => {
      console.log("posted data", data)
    })
  }

  PLsubmitHandler = (name) => {
    const obj = {name: name, user_id: this.state.userObj.user.id}
    const options = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
    body: JSON.stringify(obj)
    }

    fetch("http://localhost:3000/playlists/", options)
    .then(resp => resp.json())
    .then(data => {
      console.log("posted playlist", data)
    })
  }

  render(){
    console.log("inside appState" , this.state)
      return (
        <>
        <Navbar />
        <Switch>

            <Route exact path="/playlists/:id" render={(renderProps) => {
              return (
                <PlaylistShow 
                  videos={this.state.videos} 
                  playlists={this.state.playlists} 
                  {...renderProps}/>  
              )
            }}/>

            <Route exact path="/videos/:id" render={(renderProps) => {
              return (
              <>
                <VideoShow 
                  videos={this.state.videos} 
                  playlists={this.state.playlists} 
                  {...renderProps}/>

                <VideoNoteForm
                notes={this.state.notes} videoID={parseInt(renderProps.match.params.id)}
                />
              </>
              )
                
            }}/>

            <Route path="/playlists" render={() => 
                <PlaylistsContainer 
                  playlists={this.state.playlists}
                  userObj={this.state.userObj} 
                />} /> 
            
            <Route exact path="/add_new_video" render={(renderProps) => <NewVideo 
              userObj={this.state.userObj} 
              VsubmitHandler={this.VsubmitHandler}
              {...renderProps}
            />} />

            <Route exact path="/add_new_playlist" render={(renderProps) => <NewPlaylist 
              userObj={this.state.userObj} 
              PLsubmitHandler={this.PLsubmitHandler}
            />} />

            <Route exact path="/" render={(renderProps) => {
              return (
                <Login />
              )
            }}/>

        </Switch>

        </>

      );
    }
  }

export default App;
