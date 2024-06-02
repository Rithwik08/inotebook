import React from 'react'
import { useContext } from "react";
import NoteContext from "./context/notes/noteContext";

function Notenav(props) {
    const context = useContext(NoteContext);
    const {note}= props;
  return (
    <div className="col md-3">
     
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">
          {note.title}
          </h5>
        <p className="card-text">
         {note.description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Notenav