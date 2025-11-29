import express from "express";
const router = express.Router();

router.get("/", (req,res)=>{
    res.status(200).send("You got 10 notes");
})
router.post("/", (req,res)=>{
    console.log(req.body);
    res.status(200).send("You posted 10 notes");
})
router.put("/:id", (req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).send("You updated a note");
})
router.delete("/:id", (req,res)=>{
    console.log(req.params.id);
    
    res.status(200).send("You deleted a note");
})

export default router;