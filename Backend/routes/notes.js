const express = require('express');
const Note = require("../models/Note");
const router = express.Router();
const fetchuser = require("../middleware/fetchusers")
const { body, validationResult } = require("express-validator");
//Route 1: Get All the notes
router.get('/fetchallnote',fetchuser,async (req,res)=>{
    try {
        const notes= await Note.find({user:req.user.id});   
    res.json(notes)
        
    } catch (error) {
        console.error(error.message);
      res.status(500).send("Internel server error");
    }
     
})
//Route 2: To add notes using : POST"/api/notes/addnote. Login required
router.post('/addnotes',fetchuser, [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({min:5}),
  ],async (req,res)=>{
    try {
        const{title,description,tag}=req.body;
        //If there are error return bad request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
           title, description,tag,user:req.user.id
        })
        const saveNote= await note.save()
          
       res.json(saveNote)
        
    } catch (error) {
        console.error(error.message);
      res.status(500).send("Internel server error");
        
    }
   
})
//Route 3:Update an existing Note using : Put"/api/notes/updatenote. Login required
router.put('/updatenotes/:id',fetchuser,async (req,res)=>{
  const {title, description,tag}=req.body;  //destructuring to fetch required data from body
  // create a newNote object
  const newNote = {};
  if(title){newNote.title=title};
  if(description){newNote.description=description};
  if(tag){newNote.tag=tag};
  //Find if the requested note to be updated exist?
  let note =await Note.findById(req.params.id);
  if(!note){return res.status(404).send("user not found")}
  //To see if unauthorized user try to manipulate the notes
  if(note.user.toString() !== req.user.id){
    return res.status(401).send("Not Allowed");
  }
  //If user is authentic update its note
  note= await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
  res.json({note})
})
//Route 4:delete an existing Note using : DELETE"/api/notes/deletenote. Login required
router.delete('/deletenotes/:id',fetchuser,async (req,res)=>{ 
 const { title, description,tag}=req.body;
 try {
  
  //Find if the requested note to be deleted exist?
  let note =await Note.findById(req.params.id);
  if(!note){return res.status(404).send("user not found")}

  //To see if unauthorized user try to manipulate the notes
  if(note.user.toString() !== req.user.id){
    return res.status(401).send("Not Allowed");
  }

  //If user is authentic update its note
  note= await Note.findByIdAndDelete(req.params.id)
  res.json({"Success": "Note has been deleted"})
 } catch (error) {
  console.error(error.message);
      res.status(500).send("Internel server error");
  
 }
  
})
//Route 5: Get All the notes irrespective of their id
router.get('/all',async (req,res)=>{
  try {
      const notes= await Note.find();   
  res.json(notes)
      
  } catch (error) {
      console.error(error.message);
    res.status(500).send("Internel server error");
  }
   
})
module.exports = router