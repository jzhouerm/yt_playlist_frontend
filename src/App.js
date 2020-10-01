import React from 'react';
import './App.css';
import MyLibrary from './Components/MyLibrary/MyLibrary'
import { Route, Switch } from 'react-router-dom'
import PlaylistsContainer from './Components/playlist_index/PlaylistsContainer';
import PlaylistCard from './Components/playlist_index/PlaylistCard'
import Navbar from './Components/Navbar/Navbar'
import VideosIndex from './Components/videos_index/VideosIndex'
import NewVideo from './Components/new_video/NewVideo'
import PlaylistShow from './Components/playlist_index/PlaylistShow'

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

  render(){
    console.log("inside appState" , this.state)
      return (
        <>
        <Navbar />
        <Switch>
          
            <Route exact path="/playlists/:id/videos" render={(renderProps) => {
              return <VideosIndex userObj={this.state.userObj} playlistID={renderProps.match.params.id}/>
              // return <h1>{renderProps.match.params.id}</h1>
            }}/>

            <Route exact path="/playlists/:id" render={(renderProps) => {

              // console.log("renderprops" , this.state.userObj ? this.state.userObj.playlists.find(playlist => playlist.id === renderProps.match.params.id) : [])
              // let foundPlaylist = this.state.userObj ? this.state.userObj.playlists.find(playlist => playlist.id === renderProps.match.params.id) : []
              return (
                <PlaylistShow videos={this.state.videos} playlists={this.state.playlists} {...renderProps}/>  
              )
            }}/>

            {/* <Route exact path="/playlists/:id" render={() => <PlaylistsContainer 
              userObj={this.state.userObj} 
            />} />             */}

            <Route path="/playlists" render={() => 
                <PlaylistsContainer playlists={this.state.playlists}
                    userObj={this.state.userObj} 
                />} /> 
            

            <Route path="/videos/:id" render={(renderProps) => {
              console.log(this.state.userObj ? this.state.userObj.videos.find(video => video.id === renderProps.match.params.id) : [])
              return <h1>{renderProps.match.params.id}</h1>
            }}/>
                
            <Route exact path="/add_new_video" render={() => <NewVideo 
              userObj={this.state.userObj} 
            />} />

        </Switch>

        </>

      );
    }
  }

export default App;
