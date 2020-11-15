import React, { Component } from 'react'
import "./NewVideo.css"

export default class NewVideo extends Component {

    state = {
        
        name: "",
        url: "",
        playlist_id: null,
        playlist_name: ""
    }

    changeHandler = (e) => {
        this.setState({ url: e.target.value })
    }

    nameHandler = (e) => {
        this.setState({ name: e.target.value })
    }

    VsubmitHandler = (e) => {
        // e.preventDefault()
        this.props.VsubmitHandler(this.state.name, this.state.url, this.state.playlist_id)
    }
    
    dropdownHandler = (e) => {
        e.persist()
        console.log(e.target)
        this.setState({
            playlist_id: e.target.options[e.target.selectedIndex].dataset.id,
            playlist_name: e.target.value
        })
    }

    playlistName = () => {
        return this.props.userObj.playlists.map(el => <option data-id={el.id} value={el.name}> {el.name}</option>)
    }

    render() {
        // debugger
        return (
            <>
                {this.props?.userObj?.playlists ?
                <>
                    <br />
                <h2 class="page-title">New Video:</h2>
                <form class="new-form" onSubmit={this.VsubmitHandler}>
                    <br />
                    <h2>Add a video and select a playlist:</h2>
                    <p><input class="new-input" name="name" placeholder="Add a name for the video" value={this.state.name} onChange={this.nameHandler}/></p>
                    <p><input class="new-input" name="url" placeholder="Add a video URL" onChange={this.changeHandler} type="text" value={this.state.url}/></p>
                        <select class="new-input" name="playlist_name" value={this.state.playlist_name} onChange={this.dropdownHandler}>
                            {this.playlistName()}
                        </select>                
                    <p>
                        {/* <input className="form-button" type="submit" /> */}
                    </p>
                    
                    

                </form>
                </>
            : null }
            </>
        )
    }
}

