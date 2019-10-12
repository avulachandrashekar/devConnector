const express = require('express');
const router = express.Router();

//@route GET /api/posts/tests
//@desc get posts route
//@access public
router.get('/tests', (req, res) => res.json({message : "posts works"}));

module.exports = router;
