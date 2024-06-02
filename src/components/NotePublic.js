import React, { useEffect  } from "react";
import { useContext  } from "react";
import NoteContext from "./context/notes/noteContext";
import { get } from "mongoose";
import Notenav from "./Notenav";

function NotePublic() {


    const context = useContext(NoteContext);
  
  const { Notes ,getall,} = context;
  //To fetch all notes
 useEffect(() => {
 
     getall()

 }, [])
 // eslint-disable-next-line
 



  return (
   <>
    <div className="conatainer">
    <div className="row my-2">
      <h2>Notes</h2>
      <div >
      {Notes.length===0 && "No notes to display"}
      </div>
      {Notes.map((note) => {
        return <Notenav  key={note._id} note={note}/>;
      })}
    </div>


    </div></>
  )
}

export default NotePublic