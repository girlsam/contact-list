const express = require('express');
const router = express.Router();

const contacts = require('../lib/contacts.js');
const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Express!';
  indexController.sum(1, 2, (error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.sum = results;
      res.render('index', renderObject);
    }
  });
});

router.get('/contacts', function (req, res, next) {
  var title = "Contact List";
  var contactsObj = contacts.all;
  res.render('contacts', { contacts: contactsObj });
});

module.exports = router;
