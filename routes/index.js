const k8s = require('@kubernetes/client-node');
var express = require('express');
var router = express.Router();
var k8sApi = k8s.Config.fromCluster();


/* GET home page. */
router.get('/', function (req, res, next) {
  k8sApi.readNamespacedSecret('mysecretdamaggio', 'default')
    .then((secret) => {
      res.render('index', {
        message: 'Logging data for mysecretdamaggio',
        data: Buffer.from(secret.body.data['secretKey'],'base64')
      });
    }).catch((err) => {
      res.render('error', {
        message: 'There was an error while logging data for mysecretdamaggio',
        error: err
      });
    });;
});

module.exports = router;




