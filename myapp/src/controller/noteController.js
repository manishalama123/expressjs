import Note from "../models/Note.js";

export async function getAllNotes(req, res){
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error"});
    }
}

export async function createNotes(req, res){
    try {
        const {title, content} = await (req.body);
        const note = Note.create({title, content});
        res.status(201).json(note);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Couldn't create a note"})
        
    }
}

export async function updateNotes(req, res){
    try {
        const {title, content} = req.body;
        const update =await Note.findByIdAndUpdate(req.params.id, {title, content}, {new :true});
        if(!update) return res.status(404).json({message:"note not found"});
        res.status(200).json({message:"update successfully!!"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Couldn't create a note"});
    }
}
export async function deleteNotes(req, res){
    try {
        const deleted = await Note.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({message:"note not found"});
        res.status(400).json({message: "deleted successfully!!!"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Couldn't delete"});
    }
}