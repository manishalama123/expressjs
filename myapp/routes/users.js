const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.json([{name:'John', age:90}, {name:'Sam', age:30}])
});
module.exports = router;