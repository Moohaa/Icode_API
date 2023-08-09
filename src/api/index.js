const express = require('express');



const router = express.Router();

const executor =require("../executor");

router.post('/exec',async (req, res) => {
  const lang =req.body.lang;
  const script =req.body.code;
  let output =  await executor(lang,script);
  res.json({
    output:output,
    test:''
  });
});


module.exports = router;
