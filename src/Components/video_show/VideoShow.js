import React from 'react'
import VideoNoteCard from './VideoNoteForm-in-progress'
// import { NavLink } from 'react-router-dom'


class VideoShow extends React.Component {

    video = this.props?.videos?.find(el => el.id === parseInt(this.props.match.params.id))

    render(){
        // debugger
            return (    
                this.video ?
                <>                
                    <p class="video-p">
                    <h2 class="page-title">{this.video.name}</h2>
                    </p>
                    <p>
                    {<iframe title="unique" width="800" height="450" src={this.video.url} frameborder="0"></iframe>}
                    </p>
                    {/* <VideoNoteCard video={this.video}/> */}
                </>
                    :
                    null
            )
        }
    }



export default VideoShow