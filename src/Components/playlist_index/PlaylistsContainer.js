import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PlaylistCard from './PlaylistCard'

class PlaylistsContainer extends React.Component {

    // state = {
    //     playlistObj: null
    // }

    playlists = () => {
        return this.props.playlists.map(playlist => 
            <PlaylistCard key={playlist.id} playlist={playlist}/>)
    }

    // playlists = () => {
    //     return this.?.userObj?.playlists?.map(playlist => 
    //         <PlaylistCard key={playlist.id} playlist={playlist}/>)
    // }
    
    // componentDidMount(){                                     
    //     fetch("http://localhost:3000/users/1/")                
    //     .then(resp => resp.json())                             
    //     .then(userObj => this.setState({
    //        ...this.state,
    //        playlistObj: userObj.playlists}))}
    
    render(){
        console.log("inside PLContainer :", this.props)
        
        return(
            <>
                {!!this.props.userObj === false ? <h1>Loading...</h1> : 
                    <>
                            <div>
                                <h1>Playlist Index Page (All Playlists)</h1>
                            </div>
                            <div>
                                {this.playlists()}
                            </div>
        
                    </>
                }
        
            </> 
        )
    }
}
    
export default PlaylistsContainer

// when /playlists path is triggered, render the JSX below
