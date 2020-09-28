import React from 'react'
import { NavLink } from 'react-router-dom'


class PlaylistCard extends React.Component {


    render(){
        console.log("inside playlistCard ", this.props.playlist)
        // debugger
        return (
            <>
                <h1>Playlist Show Page</h1>
                <NavLink to={`/playlists/${this.props.playlist.id}`}>
                    <p>{this.props.playlist.videos}</p>
                    <p>Video Link</p>

                </NavLink>
            </>
        )
    }

}

export default PlaylistCard

/* 
ln 14 - Cannot read property of 'id' of undefined, the object is rendering twice with different 
info, first time with componentDidMount which doesn't have api info, need to set up conditionals in 
PlaylistsContainer
*/