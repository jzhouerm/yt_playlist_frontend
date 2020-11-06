import React, { Component } from 'react'
import  "./Video.css"

export default class VideoNoteForm extends Component {

    state = {
        text: "",
        notesObjArray: []
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/notes/")
        .then(resp => resp.json())
        .then(notes => this.parseEachNote(notes))
    }
    parseEachNote = (notes) => {
        // debugger
        let abc = []
        if(notes.length > 1){
            abc = notes.filter((note) =>  note.video_id ==  this.props.videoID)
            this.setNotesToState(abc)
        } else { this.setNotesToState(notes)}
    }
    setNotesToState = (abc) => {
        this.setState({ notesObjArray: abc})
    }
    createCard = () => {
        // return this.state.notesObjArray.map(noteObj => <li>{noteObj.text}</li>)
        return ( this.state.notesObjArray.map(noteObj => {
            return(
            <li onClick={()=> this.deleteHandler}> 
                <div class="commentText" onClick={()=> this.deleteHandler}>
                    
                    <p class="" onClick={()=> this.deleteHandler}><span id={noteObj.id} onClick={()=> this.deleteHandler(noteObj.id)} type="button" >🗑</span>{noteObj.text}</p>
                    <span class="date sub-text">{noteObj.created_at.split('T')[0]}</span>
                    
                    {/* new Date().toLocaleString() */}
                </div>
            </li>
            )
        }))
    }

    changeHandler = (e) => {
        e.persist()
        this.setState(()=>({
            text: e.target.value
        }))
    }

    submitHandler =(e)=> {
        e.persist()
        e.preventDefault()
        //e.target[0].value
        const obj = {
            video_id: this.props.videoID,
            text: this.state.text
        }
        const options = {
            "method": "POST",
            "headers": {
              "Content-Type": "application/json",
              "accept": "application/json"
            },
        body: JSON.stringify(obj)
        }
        fetch('http://localhost:3000/notes/', options)
        .then(resp => resp.json())
        .then(data => {
            console.log("What is the data returning? ", data)
            this.setState({ notesObjArray: [...this.state.notesObjArray, data],
            text: '' })

        })
    }

    deleteHandler =(e)=> {
        // debugger
        let id = e.target

        const options = {
            "method": "DELETE"
        }
        fetch('http://localhost:3000/notes/${id}', options)

    }

    

    render() {
        return (
            this.props?.notes ?
            <>
            <div class="detailBox">
                <div class="titleBox">
                    <label>My Notes</label>
                    <button type="button" class="close" aria-hidden="true">&times;</button>
                </div>
                <div class="commentBox">
                    <p class="taskDescription"></p>
                </div>
                <div class="actionBox">
                    <ul class="commentList">
                        {this.createCard()}
                    </ul>
                    <form class="form-inline" role="form" onSubmit={this.submitHandler}>
                        <div class="form-group">
                            <input name="text" class="form-control" type="text" placeholder="Your comments" value={this.state.text} onChange={this.changeHandler}/>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-default">Add</button>
                        </div>
                    </form>
                </div>
            </div>

            </>
            :null
        )
    }
}
