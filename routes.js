const router = require('express').Router();

// Route to get hello world
router.get('/',async (req,res) => {
    res.json({message: 'Hello World!'});
});

module.exports = router;