const express = require('express');
const router = express.Router();

//@route GET /api/users/tests
//@desc test users route
//@access public
router.get('/tests', (req, res) => res.json({message : "users works"}));

module.exports = router;
