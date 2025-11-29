import express from "express";
import { getAllNotes, createNotes, updateNotes, deleteNotes } from "../controller/noteController.js";
const router = express.Router();

router
    .route('/')
    .get(getAllNotes)
    .post(createNotes)

router
    .route('/:id')
    .put(updateNotes)
    .delete(deleteNotes)

// NOTES


export default router;