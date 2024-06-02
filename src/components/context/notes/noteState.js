import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{
  const host = "http://localhost:5000"
    const notesInitial =[]

      const [Notes, setNotes] = useState(notesInitial)
         
      // Get all Notes irrespective of the id
      const getall = async()=>{
        //API calls
        const response = await fetch(`${host}/api/notes/all`, {
          method: "GET",
      
          headers: {
            "Content-Type": "application/json",
            
          },
      
          });
        const json = await response.json();
        setNotes(json)
      
  
        }
      
      //Get Note
         const getNotes = async()=>{
          //API calls
          const response = await fetch(`${host}/api/notes/fetchallnote`, {
            method: "GET",
        
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
        
            });
          const json = await response.json();
          setNotes(json)
        
    
          }
      //Add Note
      const addNote = async(title,description,tag)=>{
      //API calls
      const response = await fetch(`${host}/api/notes/addnotes`, {
        method: "POST",
    
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
    
        body: JSON.stringify({ title, description , tag }),
      });
      
      //logic to add notes
        const note= await response.json();
        setNotes(Notes.concat(note))

      }

      //Delete Note
      const deleteNote =async (id)=>{
        const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
          method: "DELETE",
      
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem('token')
          },
      
        });
        const json =  response.json();
        console.log(json);
        const newNotes= Notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)

        
      }

      //Edit Note
      const editNote = async (id , title, description , tag)=>{
      //API calls
      
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
          method: "PUT",
      
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem('token')
          },
      
          body: JSON.stringify({ title, description , tag                                                                           }),
        });
        const json =  response.json();
        console.log(json);
      
      
        let newNotes = JSON.parse(JSON.stringify(Notes)) //it will make the copy of notes since react finds it difficult to show the newstate of component
      //Logic to edit notes
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
          
        }
        setNotes(newNotes);
      }
    return(

        <NoteContext.Provider value={{Notes,addNote,deleteNote,editNote,getNotes,getall}}>
            {props.children}
        </NoteContext.Provider>

        
    )
}
export default NoteState;