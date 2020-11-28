import React from 'react'
import VideoNoteCard from './VideoNoteForm-in-progress'


class VideoShow extends React.Component {

    video = this.props?.videos?.find(el => el.id === parseInt(this.props.match.params.id))

    render(){
            return (    
                this.video ?
                <>                
                    <p class="video-p">
                    <h2 class="page-title">{this.video.name}</h2>
                    </p>
                    <p>
                    {<iframe title="unique" width="800" height="450" src={this.video.url} frameborder="0"></iframe>}
                    </p>
                </>
                    :
                    null
            )
        }
    }
d

export default VideoShow