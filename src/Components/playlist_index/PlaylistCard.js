import React from 'react'
import { Route, Switch, NavLink, Link } from 'react-router-dom'


class PlaylistCard extends React.Component {

    state ={
        playlistID: null
    }

    // clickHandler = () => {
    //     this.setState({playlistID : this.props.playlist.id})
    // }


    render(){
        console.log("playlistCard props: ", this.props)
        return (
            <NavLink to={`/playlists/${this.props.playlist.id}`}>
                
                <p>
                {this.props.playlist.name}
                </p>
            </NavLink>
        )
    }
}

export default PlaylistCard

/* 
Cannot read property of 'id' of undefined, the object is rendering twice with different 
info, first time with componentDidMount which doesn't have api info, need to set up conditionals in 
PlaylistsContainer

NavLink allows styling
*/