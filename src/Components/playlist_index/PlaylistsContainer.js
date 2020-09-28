import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PlaylistCard from './PlaylistCard'

class PlaylistsContainer extends React.Component {

    playlists = () => {
       return this.props.playlists.map(playlist => <PlaylistCard key={playlist.id} playlist={playlist}/>)
    }

    render(){
        console.log("inside playlistContainer :" ,this.props.playlists)
        return(
            <>
            {this.props.playlists.length === 0 ? <h1>Loading...</h1> : 

                <>
                    <Switch>
                        <Route path='/playlists/:id' render={({ match }) => {
                            let id = parseInt(match.params.id)
                            let foundPlaylist = this.props.playlists.find(playlist => playlist.id === id)
                            console.log("found playlist", foundPlaylist)     //search through playlists for id entered by user's path
                            return <PlaylistCard playlist={foundPlaylist}/>
                        }}/>

                        <Route path='/playlists' render={() => {
                            return (
            
                                <div>
                                {this.playlists()}
                                </div>
            
                            )
                        }}/>
                    </Switch>
                
                </>
            }   
            </> 




        )
    }
}
    
export default PlaylistsContainer

// when /playlists path is triggered, render the JSX below
