const express = require('express');
const router = express.Router();

//@route GET /api/profiles/test
//@desc test profile route  
//@access public
router.get('/tests', (req, res) => res.json({message : "profiles works"}));

module.exports = router;
