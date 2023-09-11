/* eslint-disable prefer-arrow-callback */
var express = require('express');
var router = express.Router();

const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages });
});

router.get('/new', function(req, res, next) {
  res.render('new', {title: 'New Post'})
});

router.post('/new', function(req, res, next) {
  const {username, postContent} = req.body;

  messages.push({text: postContent, user: username, added: new Date()});
  res.redirect('/');
});

module.exports = router;
