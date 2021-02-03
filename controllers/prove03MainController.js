
exports.getMainPage = (req, res, next) => {
    res.render('pages/prove03/prove03MainPage', { 
        title: 'Prove 03 : Best Buy', 
        path: '/prove03', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
}