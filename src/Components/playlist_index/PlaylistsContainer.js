import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PlaylistCard from './PlaylistCard'

class PlaylistsContainer extends React.Component {

    playlists = () => {
        return this.props?.userObj?.playlists?.map(playlist => 
            <PlaylistCard key={playlist.id} playlist={playlist} clickHandler={this.props.clickHandler}/>)
    }
    
    render(){
        console.log(this.props)
        
        return(
            <>
                {!!this.props.userObj == false ? <h1>Loading...</h1> : 
                    <>
                            <div>
                                <h1>Playlist Show Page</h1>
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
