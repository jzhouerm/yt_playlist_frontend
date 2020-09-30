import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


class PlaylistCard extends React.Component {

    
    render(){
        return (
                <div><a href="/playlists/video_show" onClick={() => this.props.clickHandler(this.props)}>
                        {this.props.playlist.name}</a><br /></div>
        )
    }
}

export default PlaylistCard

/* 
Cannot read property of 'id' of undefined, the object is rendering twice with different 
info, first time with componentDidMount which doesn't have api info, need to set up conditionals in 
PlaylistsContainer
*/