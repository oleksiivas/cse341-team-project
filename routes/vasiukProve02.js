// Router for Prove 02
const express = require('express');
const router = express.Router();

let reviews = [];

router.get('/', (req, res, next) =>
{
    res.render('pages/prove02/prove02Input', 
    {
        title: 'Prove 02: Book Review Form',
        path: '/prove02',
        activeTA03: true,
        contentCSS: true,
        reviews: reviews,
    });
});

router.post('/addBookReview', (req, res, next) =>
{
    let book = { 
        author: req.body.author,
        book: req.body.book,
        review: req.body.review,
    }
    reviews.push(book);



    res.render('pages/prove02/prove02Display', { 
        title: 'Prove 02: Book Reviews Display', 
        path: '/prove02Display', // For pug, EJS
        reviews: reviews,
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});



module.exports = router;