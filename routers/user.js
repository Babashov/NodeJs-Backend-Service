const express = require('express');
const router = express.Router();

// Login Router
router.get('/login',(req,res,next)=>{
    res.render('users/login');
});

router.post('/login',(req,res,next)=>{
    const {username,password} = req.body;
    if(typeof username === 'undefined' && typeof password === 'undefined')
    {
        res.render('users/login');
    }

    if(username === '' || password === '')
    {
        res.set('Content-Type', 'text/html')
        res.redirect('back');
    }

    res.send(`Username: ${username} and Password: ${password}`);
})

// Register Router
router.get('/register',(req,res,next)=>{
    res.render('users/register');
});

router.post('/register',(req,res,next)=>{
    const { username,password } = req.body;
    let errors = [];

    if(typeof username === 'undefined' && username === '' && typeof password == 'undefined' && password == '' )
    {
        errors.push({msg:'Please fill all inputs'});
    }
    
});


module.exports = router;