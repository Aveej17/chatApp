const fs = require('fs');
const path = require('path');

const express = require('express');


const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="get">

	<input id="username" type="text" name="username">

	<button type="submit">Login</button>

</form>`)
});

// router.post('/', (req, res, next)=>{
//     res.redirect('/')
// })


module.exports = router;
