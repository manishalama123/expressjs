import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    content:{
        type:String,
        require: true
    },
}, {timestamp:true})

export default mongoose.model("Note", noteSchema);