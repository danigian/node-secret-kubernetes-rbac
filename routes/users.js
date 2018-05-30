const k8s = require('@kubernetes/client-node');
var express = require('express');
var router = express.Router();
var k8sApi = k8s.Config.fromCluster();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

module.exports = router;




