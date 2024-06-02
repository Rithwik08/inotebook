import React, { useState } from 'react'
import NoteContext from "./context/notes/noteContext";
import { useContext } from "react";

function AddNote() {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setnote] = useState({title:" ",description:" ",tag:""})
    const handleClick= (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setnote({title:" ",description:" ",tag:""})//to erase the data after after subtmiting
        


    }
    const onChange= (e)=>{
        setnote({...note,[e.target.name]: e.target.value})


    }
  return (
    <div className="container">
    <h1>Submit your notes </h1>
    <form>
<div className="mb-3">
<label htmlFor="title" className="form-label">Title</label>
<input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" minLength={5} required onChange={onChange} value={note.title}/>
</div>
<div className="mb-3">
<label htmlFor="description" className="form-label">Description</label>
<input type="text" className="form-control" id="description" name='description' minLength={5} required onChange={onChange} value={note.description} />
</div>
<div className="mb-3">
<label htmlFor="tag" className="form-label">Tag</label>
<input type="text" className="form-control" id="tag" name='tag' minLength={5} required onChange={onChange} value={note.tag} />
</div>
<button disabled={note.title.length<5 || note.description.length<5 || note.tag.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>
</div>
  )
}

export default AddNote