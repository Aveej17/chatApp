const fs = require('fs');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {

    // console.log(req.body);
    fs.readFile('chat.txt', 'utf-8', (err, data)=>{
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            return res.end('Internal Server Error');
        }
        res.send(`<form onSubmit="document.getElementById('username').value = localStorage.getItem('username')" action="/" method="POST">
            <p>${data}</p>    
            <input id="message" type="text" name="message" placeholder="Type your message" required>
            <input id="username" type="hidden" name="username">
            <button type="submit">message</button>
            </form>
            <script>
                    
                    document.addEventListener('DOMContentLoaded', function() {
                        const storedUsername = localStorage.getItem('username');
                        if (!storedUsername) {
                            const username = prompt('Please enter your username:');
                            localStorage.setItem('username', username);
                            document.getElementById('username').value = username;
                        } else {
                            document.getElementById('username').value = storedUsername;
                        }
                    });
            </script>`)
    })
    
});

router.post("/",(req, res, next)=>{
    console.log(req.body);
    const message = req.body.message;
    const username = req.body.username;

    // Log message and username
    console.log('Message:', message);
    console.log('Username:', username);

    fs.appendFile('chat.txt', `${username}: ${message}\n`, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/');
        }
    });
    
})

module.exports = router;