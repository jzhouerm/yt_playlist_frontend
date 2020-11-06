import React from 'react'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import "./PlaylistCard.css"

// const link = {
//     background: '#d3d3d3',
//     textDecoration: 'none'
//   }

class PlaylistCard extends React.Component {

    state ={
        playlistID: null
    }

    // video = this.props?.videos?.find(el => el.id === parseInt(this.props.match.params))

    render(){
        console.log("playlistCard props: ", this.props)
        // console.log("Inside PlaylistCard - This is the selected video: ", this.video)
        return (
            <NavLink to={`/playlists/${this.props.playlist.id}`} >
                <p className="playlist-cards" >
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