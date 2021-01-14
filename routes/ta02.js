//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

const usernames = [];

router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        usernames: usernames,
    });
});

router.post('/addUser', (req, res, next) =>
{
    usernames.push(req.body.username);
    res.redirect('/ta02');
});

router.post('/deleteUser', (req, res, next) =>
{
    for(i = 0 ; i < usernames.length ; i++)
    {
        if(usernames[i] == req.body.name)
        {
            usernames.splice(i,1);
        }
    }
    res.redirect('/ta02');
});

module.exports = router;