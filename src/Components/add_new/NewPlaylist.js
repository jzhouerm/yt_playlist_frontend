import React, { Component } from 'react'

export default class NewPlaylist extends Component {

    state = {
        name: ""
    }

    nameHandler = (e) => {
        this.setState({ name: e.target.value })
    }

    PLsubmitHandler = (e) => {
        // e.preventDefault()
        this.props.PLsubmitHandler(this.state.name)
    }

    render() {
        // debugger
        return (
            <>
                {this.props?.userObj?.playlists ?
                <>
                <br/>
                <br/>

                <h2 class="page-title">New playlist:</h2>
                <form class="new-form" onSubmit={this.PLsubmitHandler}>
                <h2>Playlist name:</h2>
                    <br />
                    <input class="new-input" name="name" placeholder="Playlist name" value={this.state.name} onChange={this.nameHandler}/>
                    <p><input className="form-button" type="submit" /></p>
                </form>
                </>
            : null }
            </>
        )
    }
}

