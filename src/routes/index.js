

const express = require('express');
const db = require('../modal');
const router = express.Router();
const User=db.user;
router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/signup', async(req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).send('Username and password are required');
        return;
    }
    const user = User.findOne({ where: { username: username } });
    if(user){
        res.status(400).send('User already exists');
        return;
    }
    await User.create({ username, password });
});


module.exports = router;