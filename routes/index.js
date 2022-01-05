var express = require('express');
var router = express.Router();

/* GET home page. */
const data = require('../data/test.json')
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express release123' });
});
router.get('/1', function(req, res, next) {
  console.log(typeof(data))
  res.json(data)
});
module.exports = router;
