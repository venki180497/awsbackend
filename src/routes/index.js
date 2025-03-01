

const express = require('express');
const db = require('../modal');
const router = express.Router();
const User=db.user;
router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/signup', async(req, res) => {
    try{
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).send('email and password are required');
        return;
    }
    const user = await User.findOne({ where: { email: email } });

    if(user){
        res.status(400).json({message:'User already exists'});
        return;
    }
    await User.create({ email, password });
    res.status(201).json({message:'User created'}); 
}
catch(e){
    console.error(e);
    res.status(500).json({message:e.message});
}
});


module.exports = router;