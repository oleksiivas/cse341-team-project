exports.getLogin = (req, res, next) => 
{
    res.render('pages/prove05/AuthentificationPage',
    {
        path: '/login',
        title: 'Login',
        activeTA03: true,
        contentCSS: true,
        isAuthentificated: false
    });
}

exports.postLogin = (req, res, next) => {
    User.findById('5bab316ce0a7c75f783cb8a8')
      .then(user => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        req.session.save(err => {
          console.log(err);
          res.redirect('/');
        });
      })
      .catch(err => console.log(err));
  };

exports.getLogout = (req, res, next) => 
{
    res.render('pages/index', 
    {
        path: '/home',
        title: 'You are logged out',
        activeTA03: true,
        contentCSS: true,
    });
};