import React from 'react'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import VideoShow from '../video_show/VideoShow'
import "./PlaylistShow.css"

const link = {
    width: 'auto',
    padding: '8px',
    margin: '0 6px 6px',
    // background: '#FF0000',
    textDecoration: 'none',
    color: 'black',
  }

const PlaylistShow = (props) => {

    const loading =()=>{
        return(
        props.playlists ? successScreen() : failureScreen()
    )}

    const successScreen = () => {
        const filteredPlaylist = props.playlists.find(playlistObj => playlistObj.id === parseInt(props.match.params.id))
        const filteredVideos = props.videos.filter(videoObj => videoObj.playlist_id === props.match.params.id)
        
        
        
        const playlistVideos = () => {
            return filteredVideos.map(video => 
                <>
                    <NavLink to={`/videos/${video.id}`} video={video} style={link}>
                    {/* <li className="video-titles">{video.name}</li> */}
                    <p className="video-titles">{video.name}</p>
                    <iframe width="280" height="160" src={video.url} frameborder="0"></iframe>
                    </NavLink>

                </>
            )}

    
        return(
            <>
            <h2 class="page-title">
                {filteredPlaylist.name}
            </h2>
            <ul class="video-ul">
                {playlistVideos()}
            </ul>
            </>

        )
    }

    const failureScreen = () => {
            return(
                <h1>
                Loading...
                </h1>

            )
    }

    return(
        <>
        {/* <h1>playlist id: {props.match.params.id}</h1> */}
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

