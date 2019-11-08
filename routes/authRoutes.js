const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // user already has code
  app.get('/auth/google/callback', passport.authenticate('google'));

// log out
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  })

  // test authentication
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};