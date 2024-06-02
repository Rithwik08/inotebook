import React, { useEffect , useState } from "react";
import { useContext , useRef } from "react";
import NoteContext from "./context/notes/noteContext";
import Notesitem from "./Notesitem";
import { get } from "mongoose";

function Notesfetch() {
  
  const context = useContext(NoteContext);
  
  const { Notes ,getNotes,editNote} = context;
  //To fetch all notes
 useEffect(() => {

 
     getNotes()

 }, [])
 // eslint-disable-next-line
 const ref = useRef(null)
 const refClose = useRef(null)
 const [note, setnote] = useState({id:"", etitle:" ",edescription:" ",etag:" "})
 
  const updatenote= (currentnote)=>{
    ref.current.click()
    setnote({id:currentnote._id, etitle: currentnote.title , edescription: currentnote.description , etag: currentnote.tag})

  }
  const handleClick= (e)=>{
    editNote(note.id , note.etitle , note.edescription , note.etag)
    refClose.current.click()
    


}
const onChange= (e)=>{
    setnote({...note,[e.target.name]: e.target.value})


}
  return (
    <div className="conatainer">
    <div className="row my-2">
      <h2>Your Notes</h2>
      <div >
      {Notes.length===0 && "No notes to display"}
      </div>
      {Notes.map((note) => {
        return <Notesitem key={note._id} updatenote={updatenote} note={note}/>;
      })}
    </div>
    {/* <!-- Button trigger modal --> */}
<button ref={ref} type="button" className="btn btn-primary , d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update your Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
<div className="mb-3">
<label htmlFor="title" className="form-label">Title</label>
<input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} minLength={5} required onChange={onChange}/>
</div>
<div className="mb-3">
<label htmlFor="description" className="form-label">Description</label>
<input type="text" className="form-control" id="edescription" name='edescription' minLength={5} required value={note.edescription} onChange={onChange}/>
</div>
<div className="mb-3">
<label htmlFor="tag" className="form-label">Tag</label>
<input type="text" className="form-control" id="etag" name='etag'value={note.etag} minLength={5} required onChange={onChange}/>
</div>

</form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Notesfetch;
