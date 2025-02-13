import React from "react";
import { useContext } from "react";
import NoteContext from "./context/notes/noteContext";


function Notesitem(props) {
  const context = useContext(NoteContext);
  const { deleteNote } = context
  const { note , updatenote } = props;
  ;
  return (
    <div className="col md-3">
     
      <div className="card">
        <div className="card-body">
          
          <h5 className="card-title">
            {note.title}
            </h5>
          <p className="card-text">
           {note.description}
          </p>
          <i className="fa-solid fa-trash-arrow-up mx-2" onClick={()=>{deleteNote(note._id)}}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}}></i>
        
        </div>
      </div>
    </div>
  );
}

export default Notesitem;
