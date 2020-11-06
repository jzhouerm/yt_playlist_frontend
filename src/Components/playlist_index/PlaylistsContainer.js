import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PlaylistCard from './PlaylistCard'
import "./PlaylistsContainer.css"

class PlaylistsContainer extends React.Component {

 
    playlists = () => {
        return this.props.playlists.map(playlist => 
            <PlaylistCard className="playlist-cards" key={playlist.id} playlist={playlist}/>)
    }
    
    render(){
        console.log("inside PLContainer :", this.props)
        
        return(
            <>
                {!!this.props.userObj === false ? <h1>Loading...</h1> : 
                    <>
                            <div>
                                <h1 class="page-title">My Playlists</h1>
                            </div>
                            <div className="playlist-cont">
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
