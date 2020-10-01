import React from 'react'
import { Route, Switch, NavLink, Link } from 'react-router-dom'

const PlaylistShow = (props) => {

    const loading =()=>{
        return(
        // debugger
        props.playlists ? successScreen() : failureScreen()
        )}

    const successScreen = () => {
        const filteredPlaylist = props.playlists.find(playlistObj => playlistObj.id === parseInt(props.match.params.id))
        const filteredVideos = props.videos.filter(videoObj => videoObj.playlist_id === props.match.params.id)
        const playlistVideos = () => {
            return filteredVideos.map(video => <li>{video.name}</li>)
            console.log("props.video" , props.videos)
            // debugger
        }
    
        return(
            <>
            <h1>
                {filteredPlaylist.name}
            </h1>
            <NavLink to="/videos/:id">
            <ul>
                {playlistVideos()}
            </ul>
            </NavLink>
            </>

        )
    }

    const failureScreen = () => {
            return(
                <h1>
                Unable to load...
                </h1>

            )
    }

    return(
        <>
        <h1>playlist id: {props.match.params.id}</h1>
        <h1>{loading()}</h1>
        </> 
    )
}

export default PlaylistShow 










// class PlaylistShow extends Component {

//     state = {
//         playlist: null,
//         videos: null
//     }

//     // componentDidUpdate = (previousProps) => {
//     //     if(previousProps.playlists !== this.props.playlists || previousProps.videos !== this.props.videos){
//     //         const videos = this.props.videos.filter(videoObj => videoObj["playlist_id"] === parseInt(this.props.match.params.id))
//     //         const playlist = this.props.playlists.find(playlistObj => playlistObj.id === parseInt(this.props.match.params.id))
//     //         this.setState({ playlist: playlist, videos: videos})
//     //     }
//     // }

//     playlist = this.props.playlists.find(playlist => playlist.id === parseInt(this.props.match.params.id))

//     loading =()=>{
//         return (
//             this.playlist ? this.successScreen() : this.failureScreen()
//         )
//     }

//     successScreen = () => {
//         return(
            
//             <h1>
//             text
//             </h1>
//         )
//     }

//     failureScreen = () => {
//         return "Unable to Load"
//     }


//     render() {
   
//         return (

//             <div>
//                 playlistshow
//                 <p>
//                 {this.loading()}
//                 </p>
//             </div>
//         )
//     }
// }

// export default PlaylistShow 