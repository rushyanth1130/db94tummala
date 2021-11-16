var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nagarushyanth Tummala' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'Nut Login', user: req.user });
});
router.post('/login', passport.authenticate('local'), function(req, res) {
  if (req.session.returnTo)
      res.redirect(req.session.returnTo);
  res.redirect('/');
});
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
